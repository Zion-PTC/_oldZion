"use strict";
class Package {
    url;
    descrizione;
    categoria;
    type = "npm";
    links = [];
    constructor(url, descrizione = "Nessuna descrizione è stata fornita", categoria = "Nessuna categoria è stata fornita") {
        this.url = url;
        this.descrizione = descrizione;
        this.categoria = categoria;
        this.links.push(new URL(url));
    }
}
const graphVisualizationLibrariesDescr = `Con questo pacchetto è possibile creare delle` +
    `rappresentazioni grafiche di grafi`;
const graphVisualizationLibsCat = "graph-visualization";
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
const javascriptDyagramURL = "https://www.syncfusion.com/javascript-ui-controls/diagram";
let javascriptDyagram = new Package(javascriptDyagramURL, ...graphVisLibsInfos);
const javascriptInfoVisToolkitURL = "http://philogb.github.io/jit/";
let javascriptInfoVisToolkit = new Package(javascriptInfoVisToolkitURL, ...graphVisLibsInfos);
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
