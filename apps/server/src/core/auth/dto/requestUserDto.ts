import { NewUser } from '@template/shared';
import { Request } from 'express';

export interface RequestUserDto extends Request {
    user: NewUser;
}