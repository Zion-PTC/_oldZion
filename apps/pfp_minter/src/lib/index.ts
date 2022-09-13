export {};

const imageSourcePath = "";
const imageCIDs = "";

type createCIDs = (props: { source: string }) => createCIDsReturn;
type createCIDsReturn = {
  log;
};
let createCIDs: createCIDs = function (props) {
  return "to be implemented";
};

type createCombineCIDs = (props: { source: string }) => {};
let createCombineCIDs: createCIDs = function (props) {
  return "to be implemented";
};

function run() {
  const imageCIDs = createCIDs({ source: imageSourcePath });
  const metadataCIDs = createCombineCIDs({ source: imageCIDs });
}
