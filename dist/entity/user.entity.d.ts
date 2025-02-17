import { UserRole } from '@prisma/client';
export declare class User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    created_at: Date;
}
