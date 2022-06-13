import { Price } from "./Price.js";
declare enum EquipmentScopes {
    softwareDevelopment = "software-development",
    music = "music",
    server = "server",
    visualArt = "visual-art"
}
declare type EquipmentScopeTypes = keyof typeof EquipmentScopes;
export declare class Equipment {
    name: string;
    price: Price;
    model: string;
    brand: string;
    scopes: EquipmentScopeTypes[];
    link?: [URL] | undefined;
    year?: number | undefined;
    constructor(name: string, price: Price, model?: string, brand?: string, scopes?: EquipmentScopeTypes[], link?: [URL] | undefined, year?: number | undefined);
}
export declare let raspBerryPi4: Equipment;
export declare let iPadPro: Equipment;
export declare let iPadPencil: Equipment;
export declare let macBookPro: Equipment;
export declare let superWideScreen: Equipment;
export declare let raspBerryCase: Equipment;
export {};
