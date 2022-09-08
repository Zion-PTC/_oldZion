/// <reference types="node" />
export declare function genBcryptHash(string: string | Buffer): Promise<string>;
export declare function bcryptCompare(req_pass: string | Buffer, db_pass: string): Promise<"Success" | "Wrong Password">;
