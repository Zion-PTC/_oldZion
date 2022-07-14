declare class CustomerPrototype {
    proto: Customer;
    constructor(proto: Customer);
    clone(): Customer;
}
declare class Customer {
    first: string;
    last: string;
    status: string;
    constructor(first?: string, last?: string, status?: string);
    say(): void;
}
declare let proto: Customer;
declare let prototype: CustomerPrototype;
declare let customer: Customer;
