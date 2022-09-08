import { Request, Response } from "express";
import { MinimalUserInfos, Userbase } from "./class/UserBase.js";
import { bcryptCompare, genBcryptHash } from "./lib/bcrypt.js";

export type CreateUserRequest = {
  name: string;
  password: string;
};

export type LoginRequest = CreateUserRequest;

export class Auth {
  userbase: Userbase;
  constructor() {
    this.userbase = new Userbase("ram-array");
  }
  async createUser(
    req: CreateUserRequest
  ): Promise<Response<any, Record<string, any>> | "User Exists" | 0> {
    const { name, password } = req;
    try {
      if (await this.userbase.userExists(name)) return "User Exists";
      const hashedPassword = await this.hashPassword(password);
      const user = { name: name, password: hashedPassword };
      this.userbase.users.push(user);
      return 0;
    } catch (error) {
      return 0;
    }
  }
  async getUsers(): Promise<MinimalUserInfos[]> {
    return this.userbase.users;
  }
  async hashPassword(string: string) {
    const hash = await genBcryptHash(string);
    return hash;
  }
  async login(req: LoginRequest) {
    const { name, password } = req;
    const user = this.userbase.users.find((user) => user.name == name);
    try {
      if (user) return await bcryptCompare(password, user.password);
      else return "Cannot find user";
    } catch (error) {
      return 1;
    }
  }
}
