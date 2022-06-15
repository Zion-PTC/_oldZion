/// <reference types="chai" />
import { DebugLogger } from "@zionstate_node/zion-util/built/src/zionUtil";
export declare type testEnvironmentReturn = {
    expect: Chai.ExpectStatic;
    log: DebugLogger;
};
/**
 *
 * @returns
 */
export declare const testEnvironment: () => testEnvironmentReturn;
