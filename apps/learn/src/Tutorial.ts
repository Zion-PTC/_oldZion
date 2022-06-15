import {
  decorator,
  factory,
  abstractFactory,
  facade,
  IDesignPattern,
} from "./DesignPattern.js";
import { CARLOS, DOCOMMUNITY, DOFACTORY } from "./Sorgente.js";
// /// <reference path='../Namespaces/Knowledge.ts'/>

// type IStaticTutorial = Knowledge.IStaticTutorial;
// type ITutorial = Knowledge.ITutorial;
// type ISorgente = Knowledge.ISorgente;
// type IStaticSorgente = Knowledge.IStaticSorgente;
// type IDesignPattern = Knowledge.IDesignPattern;
import { ISorgente } from "./Sorgente";
import { IFile } from "./File";

enum TutorialEnums {
  youtube = "You Tube",
  blogPost = "Blog Post",
  book = "Book",
}
type TutorialTypes = keyof typeof TutorialEnums;

export interface IStaticTutorial {
  get tutorials(): ITutorial[];
  mostraTutorials(): void;
}

export interface ITutorial {
  get links(): string[];
  set links(links: string[]);
  get github(): string;
  set github(repo: string);
  get oggetto(): IDesignPattern[];
  set oggetto(oggetto: IDesignPattern[]);
  get sorgente(): ISorgente[];
  set sorgente(sorgente: ISorgente[]);
  id: number;
  titolo: string;
  annotazioni?: string[];
  file?: IFile;
  type: TutorialTypes;
  aggiungiSorgente(sorgente: ISorgente): ITutorial;
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  aggiungiAnnotazione(annotazione: string): ITutorial;
}

export abstract class ATutorial implements ITutorial {
  // STATIC
  static #tutorials: ATutorial[] = [];
  static get tutorials() {
    return ATutorial.#tutorials;
  }
  static mostraTutorials() {
    let array: { [key: string]: {} } = {};
    function aggiunginome(tutorial: Tutorial) {
      array[tutorial.titolo] = {
        type: TutorialEnums[tutorial.type],
        links: tutorial.links.length,
        github: tutorial.github === "no github" ? undefined : "✅",
        oggetto: tutorial.oggetto.map((oggetto) => oggetto.nome).join(" "),
        sorgente: tutorial.#sorgente.map((sor) => sor.titolo).join(" "),
        annotazioni: tutorial.annotazioni.length > 0 ? "✅" : undefined,
        file: tutorial.file ? (tutorial.file.path ? "✅" : 0) : undefined,
      };
    }
    this.tutorials.forEach(aggiunginome);
    array.totale = {
      links: this.tutorials
        .map((tut) => {
          return tut.links;
        })
        .flat().length,
    };
    return console.table(array);
  }
  // INSTANCE
  #github?: URL;
  get github(): string {
    if (this.#github) return this.#github.href;
    return "no github";
  }
  set github(gituhubPath: string) {
    this.#github = new URL(gituhubPath);
  }
  #oggetto: IDesignPattern[] = [];
  get oggetto(): IDesignPattern[] {
    return this.#oggetto;
  }
  set oggetto(oggetto: IDesignPattern[]) {
    this.#oggetto.push(...oggetto);
  }
  #sorgente: ISorgente[] = [];
  get sorgente(): ISorgente[] {
    return this.#sorgente;
  }
  set sorgente(sorgente: ISorgente[]) {
    this.#sorgente.push(...sorgente);
  }
  #links: URL[] = [];
  get links(): string[] {
    let arr: string[] = [];
    function getpath(link: URL) {
      arr.push(link.href);
    }
    this.#links.forEach(getpath);
    return arr;
  }
  set links(linksPaths: string[]) {
    let links: URL[] = [];
    let type: TutorialTypes = this.type;
    function addtolinks(linkPath: string) {
      const newURL = new URL(linkPath);
      links.push(newURL);
      if (newURL.host === "www.youtube.com") type = "youtube";
    }
    linksPaths.forEach(addtolinks);
    this.type = type;
    this.#links.push(...links);
  }
  id: number;
  type: TutorialTypes = "blogPost";
  titolo: string = "titolo qui";
  annotazioni: string[] = [];
  file?: IFile;
  constructor() {
    ATutorial.#tutorials.push(this);
    this.id = ATutorial.#tutorials.length;
  }
  abstract aggiungiSorgente(sorgente: ISorgente): ITutorial;
  abstract aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  abstract aggiungiAnnotazione(annotazione: string): ITutorial;
}

function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
@staticImplements<IStaticTutorial>()
export class Tutorial extends ATutorial {
  constructor() {
    super();
    Tutorial.tutorials.push(this);
  }
  aggiungiSorgente(sorgente: ISorgente): ITutorial {
    this.sorgente = [sorgente];
    sorgente.aggiungiTutorial(this);
    return this;
  }
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial {
    this.oggetto.push(oggetto);
    oggetto.aggiungiTutorial(this);
    return this;
  }
  aggiungiAnnotazione(annotazione: string): ITutorial {
    this.annotazioni.push(annotazione);
    return this;
  }
}
const decTut1URL =
  "https://www.dofactory.com/javascript/design-patterns/decorator";
export let decTut1 = new Tutorial();
decTut1.type = "book";
decTut1.titolo = "Decorator Tutorial 1";
decTut1.aggiungiSorgente(DOFACTORY);
decTut1.aggiungiOggetto(decorator);
decTut1.file = {
  path: "/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator.js",
};
decTut1.links = [decTut1URL];

const decTut3URL1 =
  "https://dev.to/carlillo/understanding-design-patterns-decorator-using-long-night-got-example-276c";
const decTut3URL2 = "https://www.carloscaballero.io/design-patterns-decorator/";
export let decTut3 = new Tutorial();
decTut3.type = "book";
decTut3.titolo = "Decorator Tutorial 3";
decTut3.aggiungiSorgente(CARLOS);
decTut3.aggiungiOggetto(decorator);
decTut3.file = {
  path: "/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator/carlos2.js",
};
decTut3.links = [decTut3URL1, decTut3URL2];

const decTut2URL =
  "https://dev.to/carlillo/understanding-design-patterns-decorator-using-long-night-got-example-276c";
const decTut2GitHub =
  "https://github.com/Caballerog/blog/tree/master/adapter-pattern";
export let decTut2 = new Tutorial();
decTut2.type = "book";
decTut2.titolo = "Decorator Tutorial 2";
decTut2.aggiungiSorgente(CARLOS);
decTut2.aggiungiOggetto(decorator);
decTut2.file = {
  path: "/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator/carlos1.js",
};
decTut2.links = [decTut2URL];
decTut2.github = decTut2GitHub;

const TSGenericsPath =
  "https://www.typescriptlang.org/docs/handbook/2/generics.html";
export let TSGenerics = new Tutorial();
TSGenerics.titolo = "Generics";
TSGenerics.links = [TSGenericsPath];

const factoryTutorialPath =
  "https://www.dofactory.com/javascript/design-patterns/factory-method";
export let factoryTutorial = new Tutorial();
factoryTutorial.titolo = "JavaScript Factory Method";
factoryTutorial.type = "book";
factoryTutorial.links = [factoryTutorialPath];
factoryTutorial.aggiungiSorgente(DOFACTORY);
factoryTutorial.aggiungiOggetto(factory);

//// ABSTRACT FACTORY

const abstractFactory1Path =
  "https://www.dofactory.com/javascript/design-patterns/abstract-factory";
export let abstractFactory1 = new Tutorial();
abstractFactory1.titolo = "JavaScript Abstract Factory";
abstractFactory1.type = "book";
abstractFactory1.links = [abstractFactory1Path];
abstractFactory1.aggiungiSorgente(DOFACTORY);
abstractFactory1.aggiungiOggetto(abstractFactory);

const abstractFactory2Path =
  "https://www.digitalocean.com/community/tutorials/js-factory-pattern";
export let abstractFactory2 = new Tutorial();
abstractFactory2.titolo =
  "JavaScript Object Oriented Patterns: Factory Pattern";
abstractFactory2.links = [abstractFactory2Path];
abstractFactory2.aggiungiSorgente(DOCOMMUNITY);
abstractFactory2.aggiungiOggetto(abstractFactory);

const facade1Path =
  "https://www.dofactory.com/javascript/design-patterns/facade";
export let facade1 = new Tutorial();
facade1.titolo = "JavaScript Façade";
facade1.links = [facade1Path];
facade1.aggiungiOggetto(facade);
facade.aggiungiSorgente(DOFACTORY);
facade1.aggiungiAnnotazione(`
  /**
  * Annotazioni:
  * cerco di analizzare la differenza fra Factory e Facade
  * riscontrati nei tutorial
  * COSE IN COMUNE
  * • If statement
  * COSE DIVERSE
  * • lo switch statement è applicabile solo a Factory
  * • le chiamate su Facade ritornano dei boolean
  * • le chiamate su Factory ritornano un particolare valore
  * di un campo della classe.
  * // PROPRIETÀ
  * • facade ha delle proprietà
  * • nell'esempio Factory non ha proprieta, ma
  * semplicemente il costruttore crea una funzione che
  * accetta un paremtro tipo
  * // METODI
  * • le istanze di factory possiedono un metodo che
  * permette la creazione di un un oggetto a partire da
  * Classi diverse. Una factory di oggetti partendo da
  * classi predeterminate.
  * • le istanze di mortgage hanno un metodo apply che al
  * suo interno include chiamate verso multipli sub-systems.
  */
`);

const gitlabCDCIPath = "https://www.youtube.com/watch?v=qP8kir2GUgo";
let gitlabCDCI = new Tutorial();
gitlabCDCI.titolo = "GitLab CI CD Tutorial for Beginners [Crash Course]";
gitlabCDCI.links = [gitlabCDCIPath];

const sinonSpyConsoleLogPath = "https://glebbahmutov.com/blog/mocha-and-sinon/";
let sinonSpyConsoleLog = new Tutorial();
sinonSpyConsoleLog.titolo = "How to set up Mocha with Sinon.js";
sinonSpyConsoleLog.links = [sinonSpyConsoleLogPath];

const sshKeysPath1 =
  "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys";
const sshKeysPath2 =
  "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent";
const sshKeysPath3 =
  "https://www.man7.org/linux/man-pages/man1/ssh-keygen.1.html";
const sshKeysPath4 =
  "https://www.techrepublic.com/article/how-to-view-your-ssh-keys-in-linux-macos-and-windows/";
let sshKeys = new Tutorial();
sshKeys.titolo = "ssh";
sshKeys.links = [sshKeysPath1, sshKeysPath2, sshKeysPath3, sshKeysPath4];

const secureFilesInOsxPath =
  "https://www.groovypost.com/howto/securely-delete-files-mac/";
let secureFilesInOsx = new Tutorial();
secureFilesInOsx.titolo = "Securely delete files on Mac";
secureFilesInOsx.links = [secureFilesInOsxPath];

const unixLinuxCommandsPath = "https://linuxcommand.org/lc3_man_pages/rm1.html";
let unixLinuxCommands = new Tutorial();
unixLinuxCommands.titolo = "Linux Commands";
unixLinuxCommands.links = [unixLinuxCommandsPath];

const dockerMultiPlatformBuildsPath1 =
  "https://www.docker.com/blog/multi-platform-docker-builds/";
const dockerMultiPlatformBuildsPath2 =
  "https://developer.arm.com/documentation/102475/0100/Multi-architecture-images";
let dockerMultiPlatformBuilds = new Tutorial();
dockerMultiPlatformBuilds.titolo = "Multi platform docker builds";
dockerMultiPlatformBuilds.links = [
  dockerMultiPlatformBuildsPath1,
  dockerMultiPlatformBuildsPath2,
];

const gitLoginPath =
  "https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git";
let gitLogin = new Tutorial();
gitLogin.titolo = "Settin user name in git";
gitLogin.links = [gitLoginPath];

const graphNodesClassificationwAIPath =
  "https://docs.dgl.ai/tutorials/blitz/2_dglgraph.html";
let graphNodesClassificationwAI = new Tutorial();
graphNodesClassificationwAI.titolo = "Deep Graph Learning";
graphNodesClassificationwAI.links = [graphNodesClassificationwAIPath];

const kubernetesWContainerDPath =
  "https://getbetterdevops.io/replace-docker-on-your-raspberry-pi-with-containerd/";
let kubernetesWContainerD = new Tutorial();
kubernetesWContainerD.titolo = "Replace docker on rasp with containerd";
kubernetesWContainerD.links = [kubernetesWContainerDPath];

const graphInJSPath =
  "https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/";
let graphInJS = new Tutorial();
graphInJS.titolo =
  "Data structures for beginners graphs time complexity tutorial";
graphInJS.links = [graphInJSPath];

const visualizeGraphsPath =
  "https://blog.dataiku.com/building-a-graph-visualization-tool";
let visualizeGraphs = new Tutorial();
visualizeGraphs.titolo = "Building a graph visualization tool";
visualizeGraphs.links = [visualizeGraphsPath];

const k8sIngressPath =
  "https://thenewstack.io/kubernetes-ingress-for-beginners/";
let k8sIngress = new Tutorial();
k8sIngress.titolo = "Kubernetes ingress for beginners";
k8sIngress.links = [k8sIngressPath];

const k8sIngressExternalAccessPath =
  "https://kubebyexample.com/en/learning-paths/application-development-kubernetes/lesson-3-networking-kubernetes/exposing-0";
let k8sIngressExternalAccess = new Tutorial();
k8sIngressExternalAccess.titolo = "Netoworking Kubernets";
k8sIngressExternalAccess.links = [k8sIngressExternalAccessPath];

const raspK8sCloudflarePath =
  "https://itnext.io/building-a-kubernetes-cluster-on-raspberry-pi-and-low-end-equipment-part-2-33f21695251c";
let raspK8sCloudflare = new Tutorial();
raspK8sCloudflare.titolo = "Building a kubernetes cluster on Rasp";
raspK8sCloudflare.links = [raspK8sCloudflarePath];

const gatsbyBeginnerPath = "https://www.youtube.com/watch?v=RaTpreA0v7Q&t=13s";
let gatsbyBeginner = new Tutorial();
gatsbyBeginner.titolo = "Gatsby Static Site Generator Tutorial";
gatsbyBeginner.links = [gatsbyBeginnerPath];

const nextJsStaticPagesPath = "https://www.youtube.com/watch?v=pY0vWYLDDco";
let nextJsStaticPages = new Tutorial();
nextJsStaticPages.titolo = "Next.js Static Site Generation (SSG) Tutorial";
nextJsStaticPages.links = [nextJsStaticPagesPath];

const newsInNextLayoutPath = "https://www.youtube.com/watch?v=JoSqibRgNy0";
let newsInNextLayout = new Tutorial();
newsInNextLayout.titolo = "Next.js biggest change ever";
newsInNextLayout.links = [newsInNextLayoutPath];

const nextJSFirstStepsPath =
  "https://nextjs.org/learn/foundations/how-nextjs-works/compiling";
let nextJSFirstSteps = new Tutorial();
nextJSFirstSteps.titolo = "Compiling";
nextJSFirstSteps.links = [nextJSFirstStepsPath];

const nextJSBlogExamle1Path = "https://www.youtube.com/watch?v=J_0SBJMxmcw";
let nextJSBlogExamle1 = new Tutorial();
nextJSBlogExamle1.titolo =
  "Easily create a blog with Next.js, MDX, SSG and Syntax Highlighting";
nextJSBlogExamle1.links = [nextJSBlogExamle1Path];

const nextRemarkRehypePath = "https://www.youtube.com/watch?v=LFNMs8iEgXM";
export let nextRemarkRehype = new Tutorial();
nextRemarkRehype.titolo =
  "Add a Dynamic Table of Contents to Static HTML in Next.js & React with Rehype";
nextRemarkRehype.links = [nextRemarkRehypePath];

const youtubeNodeUploadPath =
  "https://quanticdev.com/articles/automating-my-youtube-uploads-using-nodejs/";
let youtubeNodeUpload = new Tutorial();
youtubeNodeUpload.titolo = "Automating Youtube Uploads";
youtubeNodeUpload.links = [youtubeNodeUploadPath];

const mdxNextStaticContentPath = "https://www.youtube.com/watch?v=obJvzyHiQ9k";
let mdxNextStaticContent = new Tutorial();
mdxNextStaticContent.titolo =
  "MDX with Next.js: The Easiest Way to Build a Static Content Site";
mdxNextStaticContent.links = [mdxNextStaticContentPath];

const toDoListNextPath1 = "https://www.youtube.com/watch?v=iEN3SAM3LbA";
let toDoListNext = new Tutorial();
toDoListNext.titolo = "Building a Basic To-Do List With Next JS";
toDoListNext.links = [toDoListNextPath1];
