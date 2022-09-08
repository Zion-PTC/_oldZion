import { ZionYaml } from "@zionstate/system";
import { getBlogPosts } from "../lib/blogPosts.js";
import { DesignPattern, IDesignPattern } from "./DesignPattern.js";
import { staticImplements } from "./Primitive.js";

interface IStaticBlogPost {
  blogPosts: IBlogPost[];
  mostraBlogPosts(): void;
}

interface IBlogPost {
  nome: string;
  url: URL;
  get oggetti(): IDesignPattern[];
  set oggetti(oggetti: IDesignPattern[]);
  aggiungiOggetto(oggetto: IDesignPattern[]): IBlogPost;
}

type MostraBlogPost = { nome: string; url: string; oggetti: string[] }[];
abstract class ABlogPost implements IBlogPost {
  static #blogPosts: IBlogPost[] = [];
  static get blogPosts() {
    return ABlogPost.#blogPosts;
  }
  static mostraBlogPosts() {
    let arr: MostraBlogPost = [];
    function aggiungiAOggetto(this: MostraBlogPost, blogPost: IBlogPost) {
      this.push({
        nome: blogPost.nome,
        url: blogPost.url.href,
        oggetti: blogPost.oggetti.map((oggetto) => oggetto.nome),
      });
    }
    ABlogPost.#blogPosts.forEach(aggiungiAOggetto, arr);
    return console.table(arr);
  }
  abstract get oggetti(): IDesignPattern[];
  abstract set oggetti(oggetti: IDesignPattern[]);
  constructor(
    public url: URL = new URL("https://no.address.was/given"),
    public nome: string = "Nome del post"
  ) {
    ABlogPost.#blogPosts.push(this);
  }
  abstract aggiungiOggetto(oggetto: IDesignPattern[]): IBlogPost;
}

@staticImplements<IStaticBlogPost>()
export class BlogPost extends ABlogPost implements IBlogPost {
  #oggetti: IDesignPattern[] = [];
  get oggetti(): IDesignPattern[] {
    return this.#oggetti;
  }
  set oggetti(oggetti: IDesignPattern[]) {
    this.aggiungiOggetto(oggetti);
    this.oggetti.push(...oggetti);
  }
  constructor(
    public url: URL = new URL("https://no.address.was/given"),
    public nome: string = "Nome del post"
  ) {
    super();
  }
  aggiungiOggetto(oggetto: IDesignPattern[]) {
    oggetto.forEach((oggetto) => oggetto.aggiungiBlogPost(this));
    this.#oggetti.push(...oggetto);
    return this;
  }
}

type BlogPostsMD = { url?: string; oggetti?: string[] };
let BlogPostsMDs = getBlogPosts();
function creaBlogPost(path: string) {
  let yaml = new ZionYaml<BlogPostsMD>(path);
  let parsed = yaml.parsed;
  let nwBlogPost = new BlogPost();
  if (parsed.url) nwBlogPost.url = new URL(parsed.url);
  if (parsed.oggetti) {
    let res = parsed.oggetti.map((oggetto) => {
      let res = DesignPattern.designPatterns.find((dp) => dp.nome === oggetto);
      if (res) return res;
    });
    res.forEach((res) => {
      if (res) nwBlogPost.aggiungiOggetto([res]);
    });
  }
}
BlogPostsMDs.forEach(creaBlogPost);
