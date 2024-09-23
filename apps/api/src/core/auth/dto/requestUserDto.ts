import { User } from '@/drizzle/schema';
import { Request } from 'express';

export interface RequestUserDto extends Request {
    user: User;
}