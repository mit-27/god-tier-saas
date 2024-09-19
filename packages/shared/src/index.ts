// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { postContract } from './routers/posts';

const c = initContract();



export const contract = c.router(
    {
        posts: postContract
    },
    { pathPrefix: '/api', strictStatusCodes: true }
);