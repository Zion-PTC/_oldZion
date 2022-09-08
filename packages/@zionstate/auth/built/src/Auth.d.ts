import { Response } from "express";
import { MinimalUserInfos, Userbase } from "./class/UserBase.js";
export declare type CreateUserRequest = {
    name: string;
    password: string;
};
export declare type LoginRequest = CreateUserRequest;
export declare class Auth {
    userbase: Userbase;
    constructor();
    createUser(req: CreateUserRequest): Promise<Response<any, Record<string, any>> | "User Exists" | 0>;
    getUsers(): Promise<MinimalUserInfos[]>;
    hashPassword(string: string): Promise<string>;
    login(req: LoginRequest): Promise<"Success" | "Wrong Password" | "Cannot find user" | 1>;
}
