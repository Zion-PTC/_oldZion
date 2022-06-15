import { expect } from "chai";
import Mocha from "mocha";
import { zionUtil } from "@zionstate_node/zion-util";
/**
 *
 * @returns
 */
export const testEnvironment = () => {
    const testRunner = new Mocha({ slow: 1000 });
    testRunner.suite.emit("pre-require", global, "nofile", testRunner);
    var suiteRun = testRunner.run();
    process.on("exit", (code) => {
        // FIX not sure of this one
        process.exit(suiteRun.stats ? (suiteRun.stats.failures > 0 ? 1 : 0) : code);
    });
    let log = zionUtil.debuglog("log");
    return {
        expect,
        log,
    };
};
