import {
  decorator,
  DesignPattern,
  factory,
} from "../built/src/DesignPattern.js";
import { singleton, strategy } from "../built/src/DesignPattern.js";
import { singleton1, singleton2, strategy1 } from "../built/src/Esercizio.js";
import { CARLOS, DOFACTORY, PJDP } from "../built/src/Sorgente.js";
import { decTut1, nextRemarkRehype, Tutorial } from "../built/src/Tutorial.js";
import util from "util";

// DOFACTORY.mostraDesignPatternSenzaEsempi("Behavioral");
// DOFACTORY.mostraDesignPatternSenzaEsempi("Creational");
// DOFACTORY.mostraDesignPatternSenzaEsempi("Structural");
// DOFACTORY.contaDesignPatternSenzaEsempi();
// DOFACTORY.contaDesignPatternSenzaEsempi("Behavioral");
// DOFACTORY.contaDesignPatternSenzaEsempi("Creational");
// DOFACTORY.contaDesignPatternSenzaEsempi("Structural");
DOFACTORY.mostraDesignPatternConEsempi();
// factory.mostraSorgenti();
// PJDP.mostraPatternID(decorator);
// console.log(decTut1.file.path);
// console.log(Object.assign({}, nextRemarkRehype));
Tutorial.mostraTutorials();
