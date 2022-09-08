import { RAM, FS } from "@zionstate/database";
import { DesignPattern, Tutorial } from "@zionstate/learn";
import { IDesignPattern } from "@zionstate/learn/built/src/DesignPattern";
import { ISorgente, Sorgente } from "@zionstate/learn";
import { getTutorials } from "./lib/tutorials.js";

const ZionYaml = FS.ZionYaml;
const findItem = RAM.Array.findItem;

enum TutorialEnums {
  youTube = "You Tube",
  blogPost = "Blog Post",
  book = "Book",
  videoCourse = "Video Course",
}
type TutorialTypes = keyof typeof TutorialEnums;

type TutorialMD = {
  titolo?: string;
  links?: string[];
  type?: TutorialTypes;
  designPattern?: string;
  slug?: string;
  annotazioni?: string[];
  github?: string;
  file?: { path: string };
};
const tutorialsPath = getTutorials();
function creaTutorial(path: string) {
  let yaml = new ZionYaml<TutorialMD>(path);
  let parsed = yaml.parsed;
  let nwTutorial = new Tutorial();
  if (parsed.titolo) nwTutorial.titolo = parsed.titolo;
  if (parsed.links) nwTutorial.links = parsed.links;
  if (parsed.type) nwTutorial.type = parsed.type;
  if (parsed.designPattern) {
    findItem<typeof DesignPattern, IDesignPattern, TutorialMD, Tutorial>(
      "nome",
      DesignPattern,
      "designPatterns",
      parsed,
      nwTutorial,
      "aggiungiOggetto",
      "designPattern"
    );
  }
  if (parsed.slug) {
    let res: ISorgente | undefined = Sorgente.sorgenti.find(
      (sorgente) => sorgente.slug === parsed.slug
    );
    if (res) nwTutorial.aggiungiSorgente(res);
  }
  if (parsed.annotazioni) nwTutorial.annotazioni.push(...parsed.annotazioni);
  if (parsed.github) nwTutorial.github = parsed.github;
  if (parsed.file) nwTutorial.file = parsed.file;

  // nwTutorial.links = parsed.additionalPaths;

  return nwTutorial;
}
export let tutoPath = tutorialsPath.map(creaTutorial);
export default Tutorial;
