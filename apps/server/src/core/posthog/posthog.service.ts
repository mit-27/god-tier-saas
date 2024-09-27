import { Injectable, Logger } from '@nestjs/common';
import { PostHog } from 'posthog-node';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostHogService {
    private client: PostHog | null = null;
    private readonly logger = new Logger(PostHogService.name);

    constructor(private configService: ConfigService) {
        this.initializeClient();
    }

    private initializeClient() {
        const apiKey = this.configService.get<string>('POSTHOG_KEY');
        const host = this.configService.get<string>('POSTHOG_HOST');

        if (!apiKey) {
            this.logger.warn('PostHog API key is not set. PostHog tracking will be disabled.');
            return;
        }

        try {
            this.client = new PostHog(apiKey, { host });
            this.logger.log('PostHog client initialized successfully');
        } catch (error) {
            this.logger.error('Failed to initialize PostHog client', error);
        }
    }

    captureEvent(distinctId: string, event: string, properties?: any) {
        if (!this.client) {
            this.logger.warn('PostHog client is not initialized. Event not captured.');
            return;
        }

        try {
            this.client.capture({
                distinctId,
                event,
                properties,
            });
        } catch (error) {
            this.logger.error(`Failed to capture event: ${event}`, error);
        }
    }

    identifyUser(distinctId: string, properties?: any) {
        if (!this.client) {
            this.logger.warn('PostHog client is not initialized. User not identified.');
            return;
        }

        try {
            this.client.identify({
                distinctId,
                properties,
            });
        } catch (error) {
            this.logger.error(`Failed to identify user: ${distinctId}`, error);
        }
    }

    onModuleDestroy() {
        if (this.client) {
            this.client.shutdown();
        }
    }
}