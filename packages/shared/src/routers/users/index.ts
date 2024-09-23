import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const UserSchema = z.object({
    id: z.string().uuid().optional(), // uuid with random default
    name: z.string().max(255).nullable(), // varchar(255)
    email: z.string().email(), // unique and not null
    emailVerified: z.boolean().nullable(), // boolean, can be null
    image: z.string().nullable(), // text, can be null
    createdAt: z.string().optional(), // timestamp in string format, defaulting to now
    updatedAt: z.string().optional()  // timestamp
});

const ErrorSchema = z.object({
    message: z.string(),
});

export const userContract = c.router(
    {
        login: {
            method: 'GET',
            path: '/auth/login',
            responses: {
                201: UserSchema,
                400: ErrorSchema,
            },
            summary: 'Login the user',

        },
        // getPosts: {
        //     method: 'GET',
        //     path: `/posts`,
        //     responses: {
        //         200: PostSchema.array(),
        //         400: ErrorSchema,
        //     },
        //     summary: 'Get All Posts',
        // },
        // getPost: {
        //     method: 'GET',
        //     path: '/posts/:id',
        //     pathParams: z.object({
        //         id: z.string().uuid(),
        //     }),
        //     responses: {
        //         200: PostSchema,
        //         400: ErrorSchema,
        //     },
        //     summary: 'Get a post by id',
        // }
    }
)