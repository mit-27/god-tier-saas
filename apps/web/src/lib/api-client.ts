"use client";
import { contract } from '@template/shared';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { tsRestFetchApi } from '@ts-rest/core'
import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
// import { auth } from './auth';



export const api = initTsrReactQuery(contract, {
    baseUrl: process.env.NEXT_PUBLIC_CLIENTSIDE_SERVER_URL!,
    baseHeaders: {
        'Authorization': () => `Bearer ${Cookies.get("access_token")}`,
        // 'x-app-source': 'ts-rest',
        // 'x-access-token': () => getAccessToken(),
    },
    // api: async (args) => {
    //     const {data : authSession} = useSession();
    //     args.headers = {
    //         ...args.headers,
    //         Authorization: `Bearer ${authSession?.accessToken}`,
    //     };
    //     return tsRestFetchApi(args);
    // }

});


