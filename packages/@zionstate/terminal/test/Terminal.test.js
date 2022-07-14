import { zionUtil } from "@zionstate_node/zion-util";
import { Terminal } from "@zionstate/terminal";
import { testEnvironment } from "@zionstate/test-suite-1";

const { expect, log } = testEnvironment();

describe("Terminal Class", () => {
  describe(`Method methodName`, () => {
    it(`test`, async () => {
      const terminal = new Terminal();
      await terminal.start();
      //
    });
  });
});
