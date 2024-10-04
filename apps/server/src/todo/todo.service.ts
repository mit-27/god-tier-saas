import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from '@/core/drizzle/drizzle.module';
import { post, DrizzleDB, NewPost } from '@template/shared';
import { eq } from 'drizzle-orm';
import { PinoLogger } from 'nestjs-pino';
import { PostHogService } from '@/core/posthog/posthog.service';

@Injectable()
export class TodoService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB, private readonly logger: PinoLogger, private readonly postHogService: PostHogService) {
        this.logger.setContext(TodoService.name);
    }

    async getPosts() {
        return [
            {
                id: '1',
                todoTitle: 'Buy groceries',
                completed: false
            },
            {
                id: '2',
                todoTitle: 'Go to the gym',
                completed: true
            }

        ]
    }



}