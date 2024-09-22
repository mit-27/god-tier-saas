"use client";
import { initQueryClient, } from '@ts-rest/react-query';
import { contract } from '@template/shared';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';

export const api = initTsrReactQuery(contract, {
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
    baseHeaders: {
        // 'x-app-source': 'ts-rest',
        // 'x-access-token': () => getAccessToken(),
    },
});


export const tsrCreateQueryClient = () => {
    return initQueryClient(contract, {
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
        baseHeaders: {
            // 'x-app-source': 'ts-rest',
            // 'x-access-token': () => getAccessToken(),
        },
    });
}