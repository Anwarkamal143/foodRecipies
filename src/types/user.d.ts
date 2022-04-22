import { Dayjs } from 'dayjs';
export type UserStatus =  'trending' | ''
export type UserRoles =  'cook' | 'admin'
export type User = {
    _id?: string,
    roles?: UserRoles[]
    profileImg: string,
    name: string,
    username?: string,
    status?: UserStatus,
    isDeleted?: boolean,
    createdAt?: string | Dayjs,
    updatedAt?: string | Dayjs,
    socialAccounts?: string[]
  
}