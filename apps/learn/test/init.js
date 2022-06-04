import {
  decorator,
  DesignPattern,
  factory,
} from "../built/src/DesignPattern.js";
import { singleton, strategy } from "../built/src/DesignPattern.js";
import {
  Esempio,
  singleton1,
  singleton2,
  strategy1,
} from "../built/src/Esempio.js";
import { CARLOS, DOFACTORY, PJDP } from "../built/src/Sorgente.js";
import { decTut1 } from "../built/src/Tutorial.js";

Esempio;
DOFACTORY.mostraDesignPatternSenzaEsempi("Behavioral");
DOFACTORY.mostraDesignPatternSenzaEsempi("Creational");
DOFACTORY.mostraDesignPatternSenzaEsempi("Structural");
DOFACTORY.contaDesignPatternSenzaEsempi();
DOFACTORY.contaDesignPatternSenzaEsempi("Behavioral");
DOFACTORY.contaDesignPatternSenzaEsempi("Creational");
DOFACTORY.contaDesignPatternSenzaEsempi("Structural");
factory.mostraSorgenti();
PJDP.mostraPatternID(decorator);
console.log(decTut1.file.path);
