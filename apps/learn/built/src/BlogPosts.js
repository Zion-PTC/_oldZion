import { classExpressionPattern, decoratorFunction, mixin, } from "./DesignPattern";
export class BlogPost {
    url;
    #oggetti = [];
    nome = "Nome del post";
    get oggetti() {
        return this.#oggetti;
    }
    set oggetti(oggetti) {
        oggetti.forEach(this.#aggiungiBlog);
        this.oggetti.push(...oggetti);
    }
    constructor(url = new URL("http://znft.tech")) {
        this.url = url;
    }
    #aggiungiBlog(oggetto) {
        oggetto.aggiungiBlogPost(this);
    }
}
const mixBadGodEvilPath = "https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/";
const mixBadGodEvilUrl = new URL(mixBadGodEvilPath);
export const mixBadGodEvil = new BlogPost(mixBadGodEvilUrl);
mixBadGodEvil.oggetti = [mixin, classExpressionPattern];
const enhancingMixinsPath = "http://justinfagnani.com/2016/01/07/enhancing-mixins-with-decorator-functions/";
const enhancingMixinsURL = new URL(enhancingMixinsPath);
export const enhancingMixins = new BlogPost(enhancingMixinsURL);
enhancingMixins.oggetti = [mixin, decoratorFunction];
const selfHostink8sOnRapsPath = "https://blog.alexellis.io/self-hosting-kubernetes-on-your-raspberry-pi/";
const selfHostink8sOnRaps = new URL(selfHostink8sOnRapsPath);
const graphVisualizationLibrariesPath = "https://elise-deux.medium.com/the-list-of-graph-visualization-libraries-7a7b89aab6a6";
const graphVisualizationLibrariesURL = new URL(graphVisualizationLibrariesPath);
export let graphVisualizationLibraries = new BlogPost(graphVisualizationLibrariesURL);
const k8sIgressControllerCheckPath = "https://kubernetes.github.io/ingress-nginx/troubleshooting/";
const k8sIgressControllerCheckURL = new URL(k8sIgressControllerCheckPath);
export let k8sIgressControllerCheck = new BlogPost(k8sIgressControllerCheckURL);
