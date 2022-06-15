enum PackageEnums {
  npm = "npm",
  yarn = "yarn",
  brew = "homebrew",
  apt = "apt",
  helm = "helm",
}
type PackageTypes = keyof typeof PackageEnums;

enum PackageCategoriaEnums {
  default = "Nessuna categoria è stata fornita",
  graphVisualization = "Graph Visualization",
  graphManipulation = "Graph Manipulation",
  mdManipulation = "MarkdownFiles Manipulation, .md",
  mdxManipulation = "MarkdownX Manipulatin, .mds",
  htmlManiputalion = "HTML files Manipulation, .html",
  yamlManipulation = "Yaml files Manipulation, .yaml",
  iCal = "iCal Interactions",
}
type PackageCategoriaTypes = keyof typeof PackageCategoriaEnums;

class Package {
  type: PackageTypes = "npm";
  #links: URL[] = [];
  get links(): string | string[] {
    let array: string[] = [];
    function aggiungilink(link: URL) {
      array.push(link.href);
    }
    this.#links.forEach(aggiungilink);
    return array;
  }
  set links(links: string | string[]) {
    if (Array.isArray(links)) links.forEach(this.#aggiungiURL);
    else this.#links.push(new URL(links));
  }
  #categoria: PackageCategoriaTypes | PackageCategoriaTypes[];
  get categoria() {
    return this.#categoria;
  }
  set categoria(categoria: PackageCategoriaTypes | PackageCategoriaTypes[]) {
    if (Array.isArray(this.#categoria)) {
      if (Array.isArray(categoria)) this.#categoria.push(...categoria);
      else this.#categoria.push(categoria);
    }
  }
  constructor(
    public url: string | string[],
    public descrizione: string = "Nessuna descrizione è stata fornita",
    categoria: PackageCategoriaTypes | PackageCategoriaTypes[] = "default"
  ) {
    if (Array.isArray(url)) url.forEach(this.#aggiungiURL);
    else this.#links.push(new URL(url));
    this.#categoria = categoria;
  }
  #aggiungiURL(url: string) {
    this.#links.push(new URL(url));
  }
}

const graphVisualizationLibrariesDescr =
  `Con questo pacchetto è possibile creare delle` +
  `rappresentazioni grafiche di grafi`;
const graphVisualizationLibsCat: PackageCategoriaTypes = "graphVisualization";
const graphVisLibsInfos = [
  graphVisualizationLibrariesDescr,
  graphVisualizationLibsCat,
];

const alchemyURL = "https://graphalchemist.github.io/Alchemy/#/";
let alchemy = new Package(alchemyURL, ...graphVisLibsInfos);

const arborURL = "http://arborjs.org/";
let arbor = new Package(arborURL, ...graphVisLibsInfos);

const d3JSURL = "https://d3js.org/";
let d3js = new Package(d3JSURL, ...graphVisLibsInfos);

const dagrejsURL = "https://github.com/dagrejs/dagre-d3";
let dagrejs = new Package(dagrejsURL, ...graphVisLibsInfos);

const draculaURL = "https://www.graphdracula.net/";
let dracula = new Package(draculaURL, ...graphVisLibsInfos);

const elGraphoURL = "https://www.elgrapho.com/";
let elGrapho = new Package(elGraphoURL, ...graphVisLibsInfos);

const g6URL = "https://github.com/antvis/g6/";
let g6 = new Package(g6URL, ...graphVisLibsInfos);

const ggraphURL = "https://github.com/pcbje/ggraph";
let ggraph = new Package(ggraphURL, ...graphVisLibsInfos);

const gojsURL = "https://gojs.net/latest/index.html";
let gojs = new Package(gojsURL, ...graphVisLibsInfos);

const graphglURL = "https://github.com/uskudnik/GraphGL";
let graphgl = new Package(graphglURL, ...graphVisLibsInfos);

const graphosauruslURL = "https://github.com/frewsxcv/graphosaurus";
let graphosaurus = new Package(graphosauruslURL, ...graphVisLibsInfos);

const h3viewerlURL = "https://graphics.stanford.edu/~munzner/h3/";
let h3viewer = new Package(h3viewerlURL, ...graphVisLibsInfos);

const javascriptDyagramURL =
  "https://www.syncfusion.com/javascript-ui-controls/diagram";
let javascriptDyagram = new Package(javascriptDyagramURL, ...graphVisLibsInfos);

const javascriptInfoVisToolkitURL = "http://philogb.github.io/jit/";
let javascriptInfoVisToolkit = new Package(
  javascriptInfoVisToolkitURL,
  ...graphVisLibsInfos
);

const jointjsURL = "https://www.jointjs.com/opensource";
let jointjs = new Package(jointjsURL, ...graphVisLibsInfos);

const jsgraphitURL = "http://js-graph-it.sourceforge.net/";
let jsgraphit = new Package(jsgraphitURL, ...graphVisLibsInfos);

const jsPlumbURL = "https://github.com/jsplumb/jsplumb/";
let jsPlumb = new Package(jsPlumbURL, ...graphVisLibsInfos);

const keylinesURL = "http://keylines.com/";
let keylines = new Package(keylinesURL, ...graphVisLibsInfos);

const mxgraphURL = "http://www.jgraph.com/mxgraph.html";
let mxgraph = new Package(mxgraphURL, ...graphVisLibsInfos);

const neovisjsURL = "https://github.com/neo4j-contrib/neovis.js/";
let neovisjs = new Package(neovisjsURL, ...graphVisLibsInfos);

const netjsonURL = "https://github.com/netjson/netjsongraph.js";
let netjson = new Package(netjsonURL, ...graphVisLibsInfos);

const networkkubeURL = "https://github.com/networkcube/networkcube";
let networkkube = new Package(networkkubeURL, ...graphVisLibsInfos);

const ogmaURL = "http://ogma.linkurio.us/";
let ogma = new Package(ogmaURL, ...graphVisLibsInfos);

const popotoURL = "http://www.popotojs.com/";
let popoto = new Package(popotoURL, ...graphVisLibsInfos);

const processingjsURL = "http://processingjs.org/";
let processingjs = new Package(processingjsURL, ...graphVisLibsInfos);

const protovisURL = "http://mbostock.github.io/protovis/";
let protovis = new Package(protovisURL, ...graphVisLibsInfos);

const rapiddURL = "http://resources.jointjs.com/demos";
let rapidd = new Package(rapiddURL, ...graphVisLibsInfos);

const regraphURL = "https://cambridge-intelligence.com/regraph/";
let regraph = new Package(regraphURL, ...graphVisLibsInfos);

const sigmajsURL = "http://sigmajs.org/";
let sigmajs = new Package(sigmajsURL, ...graphVisLibsInfos);

const sobaURL = "https://github.com/mil-tokyo/soba";
let soba = new Package(sobaURL, ...graphVisLibsInfos);

const springyURL = "http://getspringy.com/";
let springy = new Package(springyURL, ...graphVisLibsInfos);

const ugraphURL = "https://github.com/lizhongit/ugraph";
let ugraph = new Package(ugraphURL, ...graphVisLibsInfos);

const visURL = "https://github.com/visjs/vis-network";
let vis = new Package(visURL, ...graphVisLibsInfos);

const visNetworkURL = "https://github.com/datastorm-open/visNetwork";
let visNetwork = new Package(visNetworkURL, ...graphVisLibsInfos);

const vivagraphjsURL = "https://github.com/anvaka/VivaGraphJS";
let vivagraphjs = new Package(vivagraphjsURL, ...graphVisLibsInfos);

const yfilesForHTMLURL = "https://www.yworks.com/products/yfiles-for-html";
let yfilesForHTML = new Package(yfilesForHTMLURL, ...graphVisLibsInfos);

// UNIFIED
let unistUtilVisit = new Package(
  "https://www.npmjs.com/package/unist-util-visit",
  "unist utility to visit nodes.",
  "graphManipulation"
);

let unified = new Package(
  "https://www.npmjs.com/package/unified",
  "unified is an interface for processing text using syntax trees. " +
    "It’s what powers remark (Markdown), retext (natural language), and " +
    "rehype (HTML), and allows for processing between formats.",
  ["mdManipulation", "htmlManiputalion", "mdxManipulation"]
);

let remarkMdx = new Package(
  "https://www.npmjs.com/package/remark-mdx",
  "remark plugin to support the MDX syntax (JSX, expressions, import/exports).",
  "mdxManipulation"
);

let remarkHtml = new Package(
  "https://www.npmjs.com/package/remark-html",
  "remark plugin to add support for serializing HTML, It’s a shortcut " +
    "for .use(remarkRehype).use(rehypeStringify).",
  "htmlManiputalion"
);

let mdxJsMdx = new Package(
  "https://www.npmjs.com/package/@mdx-js/mdx",
  "MDX compiler.",
  "mdxManipulation"
);

let mdxJsLoader = new Package(
  "https://www.npmjs.com/package/@mdx-js/loader",
  "webpack loader for MDX.",
  "mdManipulation"
);

let mdxJsNodeLoader = new Package(
  "https://www.npmjs.com/package/@mdx-js/node-loader",
  "Node loader for MDX.",
  "mdxManipulation"
);

let iCalGenerator = new Package(
  "https://www.npmjs.com/package/ical-generator",
  "ical-generator is a small but fine library with which you " +
    "can very easily create a valid iCal calendars, for example " +
    "to generate subscriptionable calendar feeds.",
  "iCal"
);

// TODO aggiungere formattazione url (che comprenda npmjs)
let hilightJs = new Package(
  "https://www.npmjs.com/package/highlight.js",
  "Highlight.js is a syntax highlighter written in JavaScript. " +
    "It works in the browser as well as on the server. It can " +
    "work with pretty much any markup, doesn’t depend on any other " +
    "frameworks, and has automatic language detection.",
  "htmlManiputalion"
);

let yaml = new Package(
  [
    "https://www.npmjs.com/package/yaml",
    "https://eemeli.org/yaml/#parse-amp-stringify",
    "https://eemeli.org/yaml/#documents",
    "https://eemeli.org/yaml/#parsing-yaml",
  ],
  `yaml is a definitive library for YAML, the human friendly data serialization standard. This library:

  Supports both YAML 1.1 and YAML 1.2 and all common data schemas,
  Passes all of the yaml-test-suite tests,
  Can accept any string as input without throwing, parsing as much YAML out of it as it can, and
  Supports parsing, modifying, and writing YAML comments and blank lines.
  The library is released under the ISC open source license, and the code is available on GitHub. It has no external dependencies and runs on Node.js as well as modern browsers.
  
  For the purposes of versioning, any changes that break any of the documented endpoints or APIs will be considered semver-major breaking changes. Undocumented library internals may change between minor versions, and previous APIs may be deprecated (but not removed).
  
  For more information, see the project's documentation site: eemeli.org/yaml
  `,
  "yamlManipulation"
);
