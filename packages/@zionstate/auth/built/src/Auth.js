import { Userbase } from "./class/UserBase.js";
import { bcryptCompare, genBcryptHash } from "./lib/bcrypt.js";
export class Auth {
    userbase;
    constructor() {
        this.userbase = new Userbase("ram-array");
    }
    async createUser(req) {
        const { name, password } = req;
        try {
            if (await this.userbase.userExists(name))
                return "User Exists";
            const hashedPassword = await this.hashPassword(password);
            const user = { name: name, password: hashedPassword };
            this.userbase.users.push(user);
            return 0;
        }
        catch (error) {
            return 0;
        }
    }
    async getUsers() {
        return this.userbase.users;
    }
    async hashPassword(string) {
        const hash = await genBcryptHash(string);
        return hash;
    }
    async login(req) {
        const { name, password } = req;
        const user = this.userbase.users.find((user) => user.name == name);
        try {
            if (user)
                return await bcryptCompare(password, user.password);
            else
                return "Cannot find user";
        }
        catch (error) {
            return 1;
        }
    }
}
