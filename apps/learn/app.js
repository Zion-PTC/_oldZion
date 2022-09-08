import express from "express";
import fs from "fs";
// import { Tutorial, DesignPattern, Esercizio } from "@zionstate/learn";
import DesignPattern from "./build/DesignPattern.js";
import Esercizio from "./build/Esercizi.js";
import Tutorial from "./build/Tutorials.js";
import { FS } from "@zionstate/database";

const app = express();
app.use(express.json());

let variable = 0;

app.get("/", (req, res) => {
  res.json(variable);
});

app.get("/like", (req, res) => {
  variable++;
  res.json(variable);
});

app.get("/tutorials", (req, res) => {
  res.status(200).send(Tutorial.tutorials);
});

app.get("/esercizi", (req, res) => {
  const esercizi = Esercizio.esercizi.map((esercizio) => {
    let clone = {};
    Object.assign(clone, esercizio);
    const oggetti = clone.oggetti.map((oggetto) => oggetto.nome);
    clone.oggetti = oggetti;
    return clone;
  });
  res.status(200).send(esercizi);
});

app.get("/design-patterns", (req, res) => {
  const formattedData = DesignPattern.designPatterns.map((patt) => {
    const { nome, categoria, esempi, sorgenti, tutorials } = patt;
    const sorgentiTitoli = sorgenti.map((sorgente) => {
      const { titolo } = sorgente;
      return titolo;
    });
    const tutorialsTitoli = tutorials.map((tuto) => {
      const { titolo } = tuto;
      return titolo;
    });
    const esempiTitoli = esempi.map((esempio) => {
      const { nome } = esempio;
      return nome;
    });
    const isInCheatSheet =
      patt.isInCheatSheet === undefined ? false : patt.isInCheatSheet;
    const isInTSCheatSheet =
      patt.isInTSCheatSheet === undefined ? false : patt.isInTSCheatSheet;
    const isInBase = patt.isInBase === undefined ? false : patt.isInBase;
    return {
      nome,
      categoria,
      sorgentiTitoli,
      tutorialsTitoli,
      esempiTitoli,
      isInCheatSheet,
      isInTSCheatSheet,
      isInBase,
    };
  });
  res.status(200).send(formattedData);
});

app.get("/testchangefile", (req, res) => {
  const path = process.cwd();
  const data = fs.readFileSync(path + "/data/testwrite.yaml").toJSON();

  res.status(200).send(data);
});

app.get("/scanner", (req, res) => {
  const ZionYaml = FS.ZionYaml;
  let yaml = new ZionYaml(
    "/Users/WAW/Documents/Projects/ZION/apps/learn/test.yaml"
  );
  res.status(200).json(yaml);
});

app.listen(5000, () => console.log("listening on 5000"));
