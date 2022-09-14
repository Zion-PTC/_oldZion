import chai, { expect } from "chai";
import promise from "chai-as-promised";
import Mocha from "mocha";
import { zionUtil } from "@zionstate_node/zion-util";
chai.use(promise);
/**
 *
 * @returns
 */
export const testEnvironment = (amount = 1000) => {
    const testRunner = new Mocha({ slow: amount });
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
