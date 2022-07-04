declare class Shipping {
    constructor();
    request(zipStart: string, zipEnd: string, wight: string): string;
}
declare class AdvanceShipping {
    constructor();
    login(credentials: {
        token: string;
    }): void;
    setStart(start: string): void;
    setDestination(destination: string): void;
    calculate(weight: string): string;
}
declare class ShippingAdapter {
    shipping: AdvanceShipping;
    constructor(credentials: {
        token: string;
    });
    request(zipStart: string, zipEnd: string, weight: string): string;
}
declare let shipping: Shipping;
declare let credentials: {
    token: string;
};
declare let adapter: ShippingAdapter;
declare let cost1: string;
declare let cost2: string;
