import { Controller, Get, Post, Req, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
// import { CreatePostDto } from './dto/create-post.dto';
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