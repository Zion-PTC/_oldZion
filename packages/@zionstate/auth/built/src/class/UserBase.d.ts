export interface MinimalUserInfos {
    name: string;
    password: string;
}
export declare class Userbase {
    #private;
    users: MinimalUserInfos[];
    constructor(strategy: "ram-array" | "not yet defined");
    userExists(name: string): Promise<boolean | undefined>;
}
