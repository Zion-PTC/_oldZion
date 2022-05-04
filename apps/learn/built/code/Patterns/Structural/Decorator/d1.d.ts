interface IUser {
    name: string;
    say(): void;
}
declare class User implements IUser {
    name: string;
    constructor(name?: string);
    say(): void;
}
declare class DecoratedUser implements IUser {
    user: User;
    street: string;
    city: string;
    name: string;
    say: () => void;
    constructor(user: User, street: string, city: string, name?: string, say?: () => void);
}
declare function run1(): void;
