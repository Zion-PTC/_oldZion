import ZionYaml from "@zionrepack/yaml";
import { testEnvironment } from "@zionstate/test-suite-1";
const { expect, log } = testEnvironment();

const joinPaths = ZionYaml.ZionYamlToFile.joinPaths;
const getDirent = ZionYaml.ZionYamlToFile.getDirent;
const config =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionrepack/yaml/test/testYamlTo/zionyamlconfig.yaml";
const path = "/Users/WAW/Documents/Projects/ZION/apps/learn/code";
let woo = new ZionYaml.ZionYamlToFile(path, config);

// console.table(
//   woo.tree
//     .findByLevel(5)
//     .filter((e) => e.isFolder())
//     .map((e) => e.name)
// );

const structures = getFolders(2, "Structures");
const modzilla = getFolders(2, "Modzilla");
const modules = getFolders(2, "Modules");
const patterns = getFolders(2, "Patterns");
const design = getFolders(2, "Design");
const typescript = getFolders(2, "TypeScript");
const playground = getFolders(2, "_playground");

console.table({
  structures,
  modzilla,
  modules,
  patterns,
  design,
  typescript,
  playground,
});

function getFolders(level, name) {
  return (
    woo.tree.nodes
      // .findByLevel(level)
      .filter((n) => n.isFolder())
      .filter((n) => {
        return n.genitore[0].name === name;
      })
      .map((e) => e.name)
  );
}
/**
 *  'Inheritance' │
│    1    │ 'Structures'  │
│    2    │  'Modzilla'   │
│    3    │   'Modules'   │
│    4    │  'Patterns'   │
│    5    │   'Design'    │
│    6    │ 'TypeScript'  │
│    7    │ '_playground'
 */
