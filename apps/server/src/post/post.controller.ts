import { Controller, Get, Post, Req, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
// import { CreatePostDto } from './dto/create-post.dto';
import { contract } from '@template/shared';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AuthGuard } from 'src/core/auth/guards/auth.guard';


@Controller()
export class PostController {

    constructor(private readonly postService: PostService) { }


    @UseGuards(AuthGuard)
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
                    status: 200,
                    body: createdPost
                }
            },
            getPost: async ({ params }) => {
                const post = await this.postService.getPost(params.id);
                if (!post) {
                    return {
                        status: 400,
                        body: { message: "Failed to get post" }
                    }
                }
                return {
                    status: 200,
                    body: post
                }
            },
            updatePost: async ({ params, body }) => {
                const updatedPost = await this.postService.updatePost(params.id, body);
                if (!updatedPost) {
                    return {
                        status: 400,
                        body: { message: "Failed to update post" }
                    }
                }
                return {
                    status: 200,
                    body: updatedPost
                }

            },
            deletePost: async ({ params }) => {
                const deletedPost = await this.postService.deletePost(params.id);
                if (!deletedPost) {
                    return {
                        status: 400,
                        body: { message: "Failed to delete post" }
                    }
                }
                return {
                    status: 200,
                    body: deletedPost
                }
            },

        })

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