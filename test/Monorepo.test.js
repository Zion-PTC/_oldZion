import { testEnvironment } from "@zionstate/test";
import { Monorepo } from "../built/Utils/Monorepo.js";
import { zionUtil } from "@zionstate_node/zion-util";
import { FS } from "@zionstate/database";
const { system } = FS;
import { config } from "dotenv";
config();
const { joinPaths, arrayOfNamesOfFilesInFolder, existsSync } = system;

const { expect, log } = testEnvironment();

describe(`Monorepo Class`, async () => {
  let monorepo = new Monorepo("Zion", "zion", process.cwd(), process.env.TOKEN);
  it.only(
    `monorepo.status() shold return the status of all of the repos in the monorepo`,
    async () => {
      const allRepos = await monorepo.status();
      const apps = monorepo.apps;
      const pack1 = monorepo.packages["@zionrepack"];
      const pack2 = monorepo.packages["@zionstate"];
      const pack3 = monorepo.packages["@zionstate_js"];
      const pack4 = monorepo.packages["@zionstate_node"];
      const all = apps.concat(pack1).concat(pack2).concat(pack3).concat(pack4);
      function getDeps(repo) {
        let result, deps, devDeps;
        deps = [];
        devDeps = [];
        if (!repo.hasPackageJSON) return "no json";
        if (repo.packageJSON.dependencies)
          deps = Object.keys(repo.packageJSON.dependencies);
        if (repo.packageJSON.devDependencies)
          devDeps = Object.keys(repo.packageJSON.devDependencies);
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
    }
  ).timeout(10000);
  it(`task description`, async () => {
    const repacks = monorepo.packages["@zionrepack"];
    function hasSrcFolder(repo) {
      let hasDir;
      let res = repo.path;
      const src = "src";
      res = joinPaths([res, src]);
      hasDir = existsSync(res);
      return hasDir;
    }
    let res = repacks.map(hasSrcFolder);
    console.table(res);
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
