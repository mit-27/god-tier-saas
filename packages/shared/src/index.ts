// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { postContract } from './routers/posts';
import { userContract } from './routers/users';

const c = initContract();



export const contract = c.router(
    {
        posts: postContract,
        users: userContract
    }

    ,
    { pathPrefix: '/api', strictStatusCodes: true }
);