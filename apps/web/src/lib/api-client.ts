"use client";
import { initQueryClient } from '@ts-rest/react-query';
import { contract } from '@template/shared';

export const api = initQueryClient(contract, {
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
    baseHeaders: {
        // 'x-app-source': 'ts-rest',
        // 'x-access-token': () => getAccessToken(),
    },
});