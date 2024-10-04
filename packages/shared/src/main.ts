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
    },
    { pathPrefix: '/api', strictStatusCodes: true }
);


// export * from './db';
export * from './db/schema';
export * from './db/types';