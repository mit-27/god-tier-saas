import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '@/drizzle/drizzle.module';
import { post, DrizzleDB } from '@template/shared';

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