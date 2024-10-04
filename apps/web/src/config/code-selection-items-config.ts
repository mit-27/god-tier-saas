
export type AccordionDataItemType = {
    title: string,
    content: string,
    index: number,
    codeString: string,
    fileName: string,
    doc_link?: string,
}

export const AccordionData: AccordionDataItemType[] = [
    {
        title: '1) Define the API with ts-rest Router in shared module',
        content: "Define your API endpoint fields like body, query, pathParams, and headers in the router function using a simple TypeScript type with the c.type helper, or use Zod objects instead.",
        index: 0,
        doc_link: "https://ts-rest.com/docs/core/",
        fileName: "shared/../router.ts",
        codeString: `
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const contract = c.router(
    {
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
);
        `
    },
    {
        title: '2) Implement the API in the NestJS controller',
        content: 'Use TsRestHandler to implement the API in the controller and it is also compatible with NestJS decorators.',
        index: 1,
        doc_link: "https://ts-rest.com/docs/react-query/query-client",
        fileName: "server/../todo.controller.ts",
        codeString: `
import { Controller, Get, Post, Req, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { contract } from '@template/shared';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @TsRestHandler(contract.getTodo)
    async getTodos() {
        return tsRestHandler(contract.getTodo, async () => {

            const todos = await this.todoService.getPosts();
            if (!todos) {
                return {
                    status: 400,
                    body: { message: "Failed to get todos" }
                }
            }
            console.log(todos);
            return {
                status: 200,
                body: todos
            }

        })
    }
} 
        `
    },
    {
        title: '3) Use the type-safe API on the frontend with Tanstack Query.',
        content: 'You can use Tanstack query which provides type-safety for your fetch and mutation calls.',
        index: 2,
        fileName: "web/../todo/page.tsx",
        codeString: `
"use client"

import { api } from "@/lib/api-client"


const TodoPage = () => {

  const {data,isLoading,isError} = api.getTodo.useQuery({
    queryKey: ['todos'],
  });

    return (
      <div className="w-[60%] mx-auto mt-10 min-h-full">
        <h1>{isLoading ? 'Loading...' : JSON.stringify(data?.body)}</h1>
      </div>
    )
  }
    
  export default TodoPage
        `
    },


];