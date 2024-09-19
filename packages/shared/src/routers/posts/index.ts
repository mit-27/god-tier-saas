import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    body: z.string(),
});

const ErrorSchema = z.object({
    message: z.string(),
});

export const postContract = c.router(
    {
        createPost: {
            method: 'POST',
            path: '/posts',
            responses: {
                201: PostSchema,
                400: ErrorSchema,
            },
            body: PostSchema.omit({ id: true }),
            summary: 'Create a post',
        },
        getPosts: {
            method: 'GET',
            path: `/posts`,
            responses: {
                200: PostSchema.array(),
                400: ErrorSchema,
            },
            summary: 'Get All Posts',
        },
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