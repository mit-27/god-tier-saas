import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '@/core/drizzle/drizzle.module';
import { post, DrizzleDB, NewPost } from '@template/shared';
import { eq } from 'drizzle-orm';

@Injectable()
export class PostService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) { }

    async getPosts() {
        return this.db.select().from(post);
    }

    async addPost(newPost: NewPost) {
        const allPosts = await this.db.insert(post).values(newPost).returning();
        return allPosts[0];
    }

    async getPost(id: string) {
        const fetchedpost = await this.db.select().from(post).where(eq(post.id, id));
        return fetchedpost[0];
    }

    async updatePost(id: string, newPost: NewPost) {
        const updatedPost = await this.db.update(post).set(newPost).where(eq(post.id, id)).returning();
        return updatedPost[0];
    }



}