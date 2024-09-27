import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '@/core/drizzle/drizzle.module';
import { post, DrizzleDB, NewPost } from '@template/shared';
import { eq } from 'drizzle-orm';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class PostService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB, private readonly logger: PinoLogger) {
        this.logger.setContext(PostService.name);
    }

    async getPosts() {
        this.logger.info('Fetching posts');
        return this.db.select().from(post);
    }

    async addPost(newPost: NewPost) {
        this.logger.info('Adding post');
        const allPosts = await this.db.insert(post).values(newPost).returning();
        return allPosts[0];
    }

    async getPost(id: string) {
        this.logger.info('Fetching post');
        const fetchedpost = await this.db.select().from(post).where(eq(post.id, id));
        return fetchedpost[0];
    }

    async updatePost(id: string, newPost: NewPost) {
        this.logger.info('Updating post');
        const updatedPost = await this.db.update(post).set(newPost).where(eq(post.id, id)).returning();
        return updatedPost[0];
    }

    async deletePost(id: string) {
        this.logger.info('Deleting post');
        const deletedPost = await this.db.delete(post).where(eq(post.id, id)).returning();
        return deletedPost[0];
    }



}