import { testEnvironment } from "@zionstate/test-suite-1";
import { Monorepo } from "../built/Utils/Monorepo.js";
import { zionUtil } from "@zionstate_node/zion-util";
import { config } from "dotenv";
config();

const { expect, log } = testEnvironment();

describe(`Monorepo Class`, async () => {
  let monorepo = new Monorepo("Zion", "zion", process.cwd(), process.env.TOKEN);
  it(`monorepo.status() shold return the status of all of the repos in the monorepo`, async () => {
    const allRepos = await monorepo.status();
    const apps = monorepo.apps;
    const pack1 = monorepo.packages["@zionrepack"];
    const pack2 = monorepo.packages["@zionstate"];
    const pack3 = monorepo.packages["@zionstate_js"];
    const pack4 = monorepo.packages["@zionstate_node"];
    const all = apps.concat(pack1).concat(pack2).concat(pack3).concat(pack4);
    function getDeps(app) {
      let result, deps, devDeps;
      deps = [];
      devDeps = [];
      if (!app.hasPackageJSON) return "no json";
      if (app.packageJSON.dependencies)
        deps = Object.keys(app.packageJSON.dependencies);
      if (app.packageJSON.devDependencies)
        devDeps = Object.keys(app.packageJSON.devDependencies);
      result = deps.concat(devDeps);
      return result;
    }
    function getAllDeps(apps_) {
      return apps_
        .map(getDeps)
        .filter((e) => e !== "no json" && e.length !== 0)
        .flat();
    }
    const app_deps = getAllDeps(all);
    console.log(app_deps.sort().length);
    expect(allRepos).to.be.not.null;
  }).timeout(10000);

  // let res = await monorepo.apps[6].status();
  // log(res);

  // describe(`CONSTRUCTOR`, () => {
  //   it(`task description`, () => {});
  // });
  // describe(`STATIC PROPERTIES`, () => {
  //   describe(`Property property name`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`STATIC METHODS}`, () => {
  //   describe(`Method methodName`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`INSTANCE PROPERTIES`, () => {
  //   describe(`Property property name`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
  // describe(`INSTANCE METHODS}`, () => {
  //   describe(`Method methodName`, () => {
  //     it(`task description`, () => {});
  //   });
  // });
}).timeout(10000);
