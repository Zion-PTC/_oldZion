import { App } from "../src/App";
export declare function caricaConfig(this: App): {
    configObj: {
        accounts: {
            name: string;
            paths: string[];
        }[];
    };
    accounts: import("../src/class/Account").Account[];
};
