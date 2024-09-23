"use client";
import { initQueryClient, } from '@ts-rest/react-query';
import { contract } from '@template/shared';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import Cookies from 'js-cookie';



export const api = initTsrReactQuery(contract, {
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
    baseHeaders: {
        'Authorization': () => `Bearer ${Cookies.get("access_token")}`,
        // 'x-app-source': 'ts-rest',
        // 'x-access-token': () => getAccessToken(),
    },
});


