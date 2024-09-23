import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { DrizzleDB } from 'src/drizzle/types/drizzle';
// import { CreatePostDto } from './dto/create-post.dto';
import { post } from 'src/drizzle/schema';

@Injectable()
export class PostService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) { }

    async getPosts() {
        return this.db.select().from(post);
    }

    async addPost(newPost: { title: string, body: string }) {
        const allPosts = await this.db.insert(post).values(newPost).returning();
        return allPosts[0];
    }



}