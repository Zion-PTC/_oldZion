import { testEnvironment } from "@zionstate/test";
import { getTutorials } from "../built/lib/tutorials.js";

const { expect, log } = testEnvironment();
const expectedItem =
  "/Users/WAW/Documents/Projects/ZION/apps/learn/tutorials/toDoListNextPath1.yaml";
let res = getTutorials();
it("dovrebbe tornare una lista che includa il path atteso", () => {
  let map = res.map((res) => res.path);
  expect(map.includes(expectedItem)).to.be.true;
});
log(res);
