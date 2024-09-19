import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { DrizzleDB } from 'src/drizzle/types/drizzle';
import { CreatePostDto } from './dto/create-post.dto';
import { posts } from 'src/drizzle/schema';

@Injectable()
export class PostService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) { }

    async getPosts() {
        return this.db.query.posts.findMany();
    }

    async addPost(post: CreatePostDto) {
        return this.db.insert(posts).values(post);
    }



}