// contract.ts

import { initContract } from '@ts-rest/core';
import { postContract } from './routers/posts';
import { userContract } from './routers/users';
import { z } from 'zod';

const c = initContract();

export const contract = c.router(
    {
        posts: postContract,
        users: userContract,
        getTodo: {
            method: 'GET',
            path: '/todos',
            responses: {
                200: z.object({
                    id: z.string(),
                    todoTitle: z.string(),
                    completed: z.boolean(),

                }).array(),
                400: z.object({
                    message: z.string(),
                }),
            },
            summary: 'Get all todos',
        }
    },
    { pathPrefix: '/api', strictStatusCodes: true }
);


// export * from './db';
export * from './db/schema';
export * from './db/types';