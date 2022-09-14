import { zionUtil } from "@zionstate_node/zion-util";
import { testEnvironment } from "@zionstate/test";

const { expect, log } = testEnvironment();
const { splitAt } = zionUtil;
const string1 = "/ciao/mammma/guarda/come/mi/diverto";
const string2 = "ciao/mammma/guarda/come/mi/diverto";
const splitter1 = "/";

const string3 = "split.at.the.point";
const splitter2 = ".";

describe(`Method splitAt`, () => {
  it(`it should split the string at the "/" simbol, excluding the first element which shall be empty`, () => {
    const wrongSplit = string1.split(splitter1);
    const res = splitAt(string1, splitter1);
    expect(wrongSplit.length).to.be.equal(7);
    expect(res.length).to.be.equal(6);
  });
  it(`it should split the string at the "/" symbol`, () => {
    const wrongSplit = string2.split(splitter1);
    const res = splitAt(string2, splitter1);
    expect(wrongSplit.length).to.be.equal(6);
    expect(res.length).to.be.equal(6);
  });
  it(`it should split at the "."`, () => {
    let res = splitAt(string3, splitter2);
    expect(res.length).to.be.equal(4);
  });
});
