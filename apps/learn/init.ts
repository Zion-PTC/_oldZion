import { decorator, DesignPattern, factory } from './src/DesignPattern.js';
import { singleton, strategy } from './src/DesignPattern.js';
import { Esempio, singleton1, singleton2, strategy1 } from './src/Esempio.js';
import { CARLOS, DOFACTORY, PJDP } from './src/Sorgente';
import { decTut1 } from './src/Tutorial';

Esempio;
DOFACTORY.mostraDesignPatternSenzaEsempi('Behavioral');
DOFACTORY.mostraDesignPatternSenzaEsempi('Creational');
DOFACTORY.mostraDesignPatternSenzaEsempi('Structural');
DOFACTORY.contaDesignPatternSenzaEsempi();
DOFACTORY.contaDesignPatternSenzaEsempi('Behavioral');
DOFACTORY.contaDesignPatternSenzaEsempi('Creational');
DOFACTORY.contaDesignPatternSenzaEsempi('Structural');
factory.mostraSorgenti();
PJDP.mostraPatternID(decorator);
console.log(decTut1.file.path);
