var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ZionYaml } from "@zionstate/system";
import { getBlogPosts } from "../lib/blogPosts.js";
import { DesignPattern } from "./DesignPattern.js";
import { staticImplements } from "./Primitive.js";
class ABlogPost {
    url;
    nome;
    static #blogPosts = [];
    static get blogPosts() {
        return ABlogPost.#blogPosts;
    }
    static mostraBlogPosts() {
        let arr = [];
        function aggiungiAOggetto(blogPost) {
            this.push({
                nome: blogPost.nome,
                url: blogPost.url.href,
                oggetti: blogPost.oggetti.map((oggetto) => oggetto.nome),
            });
        }
        ABlogPost.#blogPosts.forEach(aggiungiAOggetto, arr);
        return console.table(arr);
    }
    constructor(url = new URL("https://no.address.was/given"), nome = "Nome del post") {
        this.url = url;
        this.nome = nome;
        ABlogPost.#blogPosts.push(this);
    }
}
let BlogPost = class BlogPost extends ABlogPost {
    url;
    nome;
    #oggetti = [];
    get oggetti() {
        return this.#oggetti;
    }
    set oggetti(oggetti) {
        this.aggiungiOggetto(oggetti);
        this.oggetti.push(...oggetti);
    }
    constructor(url = new URL("https://no.address.was/given"), nome = "Nome del post") {
        super();
        this.url = url;
        this.nome = nome;
    }
    aggiungiOggetto(oggetto) {
        oggetto.forEach((oggetto) => oggetto.aggiungiBlogPost(this));
        this.#oggetti.push(...oggetto);
        return this;
    }
};
BlogPost = __decorate([
    staticImplements()
], BlogPost);
export { BlogPost };
let BlogPostsMDs = getBlogPosts();
function creaBlogPost(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwBlogPost = new BlogPost();
    if (parsed.url)
        nwBlogPost.url = new URL(parsed.url);
    if (parsed.oggetti) {
        let res = parsed.oggetti.map((oggetto) => {
            let res = DesignPattern.designPatterns.find((dp) => dp.nome === oggetto);
            if (res)
                return res;
        });
        res.forEach((res) => {
            if (res)
                nwBlogPost.aggiungiOggetto([res]);
        });
    }
}
BlogPostsMDs.forEach(creaBlogPost);
