import { Controller, Get, Post, Req, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { PostService } from './post.service';
// import { CreatePostDto } from './dto/create-post.dto';
import { contract } from '@template/shared';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';


@Controller()
export class PostController {

    constructor(private readonly postService: PostService) { }

    @TsRestHandler(contract.posts)
    async postHandler() {
        return tsRestHandler(contract.posts, {
            getPosts: async () => {
                const posts = await this.postService.getPosts();
                if (!posts) {
                    return {
                        status: 400,
                        body: { message: "Failed to get posts" }
                    }
                }
                return {
                    status: 200,
                    body: posts
                }
            },
            createPost: async ({ body }) => {
                const createdPost = await this.postService.addPost(body);
                if (!createdPost) {
                    return {
                        status: 400,
                        body: { message: "Failed to get posts" }
                    }
                }
                return {
                    status: 201,
                    body: createdPost
                }
            },
        });

    }

    // @Post()
    // createPost(@Body() post: CreatePostDto) {
    //     return this.postService.addPost(post);
    // }

    // @Get()
    // getPosts() {
    //     return this.postService.getPosts();
    // }








} 