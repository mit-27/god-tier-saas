import { Controller, Get, Post, Req, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Post()
    createPost(@Body() post: CreatePostDto) {
        return this.postService.addPost(post);
    }

    @Get()
    getPosts() {
        return this.postService.getPosts();
    }








} 