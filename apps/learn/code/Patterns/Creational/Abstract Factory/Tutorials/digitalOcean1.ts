class AbsFactoryDigOcean {
  static part1() {
    const p1 =
      'Organizzare il codice ci può salvare da un mucchio di grane. Utlizzando le features dei linguaggi di programmazione da oggetti, possiamo utilizzae determinati pattern che ci aiutano a rendere il nostro codice più leggibile, ridurre le ridondanze e creare astrazioni, se necessario. Uno di questi pattern è il Factory Patter:';
    console.log(p1);
    const p2 = `Il factory pattern è un pattern dei linguaggi di programmazione ad oggetti che seguo la metodologia DRY. Come suggerisce il nome, le istanze degli oggetti sono creati usando una factory che realizza gli oggetti richiesti per noi.`;
    console.log(p2);
    const p3 = `Diamo un occhiata a un esempio molto semplice che utilizza il factory pattern per assemblare un oggetto Alligarore. Per farlo prima creiamo le factories che ci servono per creare le parti dell'alligaore`;
    function example1() {
      class TailFactory {
        tailLength;
        //@ts-expect-error
        constructor(props) {
          this.tailLength = props.tailLength;
        }
      }
      class TorsoFactory {
        color;
        //@ts-expect-error
        constructor(props) {
          this.color = props.color;
        }
      }
      class HeadFactory {
        snoutLength;
        //@ts-expect-error
        constructor(props) {
          this.snoutLength = props.snoutLength;
        }
      }
      // return { TailFactory, TorsoFactory, HeadFactory };
    }
    console.log(example1.toString());
    return example1();
  }
  static part2() {
    class TailFactory {
      tailLength;
      //@ts-expect-error
      constructor(props) {
        this.tailLength = props.tailLength;
      }
    }
    class TorsoFactory {
      color;
      //@ts-expect-error
      constructor(props) {
        this.color = props.color;
      }
    }
    class HeadFactory {
      snoutLength;
      //@ts-expect-error
      constructor(props) {
        this.snoutLength = props.snoutLength;
      }
    }
    // let { TailFactory, TorsoFactory, HeadFactory } = AbsFactoryDigOcean.part1();
    const par1 = `Ora creaiamo una classe che agisce da intermediario fra le factories e lo user. Chiamiamola Reptile Factory`;
    console.log(par1);
    class ReptilePartFactory {
      //@ts-expect-error
      constructor(type, props) {
        if (type === 'tail') return new TailFactory(props);
        if (type === 'torso') return new TorsoFactory(props);
        if (type === 'head') return new HeadFactory(props);
      }
    }
    console.log(ReptilePartFactory);

    const par2 = `Continuiamo con l'assemblaggio effettivo dell'alligatore.`;
    console.log(par2);
    let alligator = {};
    let alligatorProps = {
      tailLength: 2.5,
      color: 'green',
      snoutLength: 1,
    };
    // gets a tail
    //@ts-expect-error
    alligator.tail = new ReptilePartFactory('tail', alligatorProps);
    // gest a torso
    //@ts-expect-error
    alligator.torso = new ReptilePartFactory('torso', alligatorProps);
    // gets a head
    //@ts-expect-error
    alligator.head = new ReptilePartFactory('head', alligatorProps);
    console.log(alligator);
  }
  static part3() {
    const par1 = `Diamo un occhiata al pattern precedente, sembrerebbe che possiamo uare la stessa factory per creare degli oggetti simili all'alligatore. Le factories nel background non sapranno mai nulla riguardo la natura finale degli oggetti.`;
    console.log(par1);
    const par2 = `Comunque, utilizzare una factory ci da dei vantaggi:`;
    console.log(par2);
    const ul1 = `•Creazione dinamica degli oggetti: può essere utilizzata in casi in cui il tipo dell'oggetto è deciso al runtime.
    •Astrazione: lo user non ha effettivamente accesso al costruttore dell'oggeto.
    •Riutilizzabilità/Mantenimento: le stess factories possono essere riutilizzate per oggetti simili, e ci permette di aggiungere/togliere nuove classi di oggetti, in maniera semplice senza cambiare tutto il codice.`;
    console.log(ul1);
  }
  static part4() {
    const par1 = `Ora che abbiamo un po capito che cosè un factory pattern, esploriamo un po come possiamo scrivere un codice anche migliore`;
    console.log(par1);
    const par2 = `L'esempio qui sopra utillizza un'espressione IF per scoprire qualce factory deve essere chiamata in base all'input dello user. Questa è una implementazine semplice, intuitiva e non molto aperta a cambiamenti. Se dovessimo aggiungere nuove parti in seguito, dovremmo disturbare la ReptileFactory. Questa è una volazione dei principi SOLID, che sostengono "che le entità in un software (classi, moduli, funzioni, etc), dovrebbero essere aperti per estensioni ma chiuse alle modifiche.`;
    console.log(par2);
    const par3 = `E se registrassmio una classe Factory in un oggetto e lo chiamassimo la parte della factory che ci interessa come una key dell'ogetto? Innanzitutto dobbiamo 'registrare' le factories:`;
    console.log(par3);
    let registeredPartFactories = {};
    function esempio1() {
      class TailFactory {
        tailLength;
        //@ts-expect-error
        constructor(props) {
          this.tailLength = props.tailLength;
        }
      }
      class TorsoFactory {
        color;
        //@ts-expect-error
        constructor(props) {
          this.color = props.color;
        }
      }
      class HeadFactory {
        snoutLength;
        //@ts-expect-error
        constructor(props) {
          this.snoutLength = props.snoutLength;
        }
      }
      //@ts-expect-error
      registeredPartFactories['tail'] = TailFactory;
      //@ts-expect-error
      registeredPartFactories['torso'] = TorsoFactory;
      //@ts-expect-error
      registeredPartFactories['head'] = HeadFactory;
    }
    esempio1();
    console.log(esempio1.toString());
    const par4 = `E ora, il layer di astrazione puo chiamare le factories in questo modo:`;
    console.log(par4);
    class ReptileFactory {
      //@ts-expect-error
      constructor(type, props) {
        //@ts-expect-error
        return new registeredPartFactories[type](props);
      }
    }
    const newHead = new ReptileFactory('head', { snoutLength: 100 });
    console.log(newHead);
    console.log(newHead.constructor.name);
    const par5 = `Questo approccio è piu pulito e permette di espandere le nostre factories senza danneggiare il codice in ReptilePartFactory`;
    console.log(par5);
  }
  static conclusione() {
    const par1 = ` Ci sono molti altri pattern orientati alla creazione di oggetti che aumentno la leggibilità e la qualità. Quindi prima di usare il factory pattern, constrolla se ce ne sia una vera necessità. Se devi continuare a creare sempre lo stesso tipo di oggetti, in continuazione e hai anche bisogno di un layer per creare nuove istanze utlizzando questi oggetti ma fornendo comunque un certo livello di astrazione per crearne la logica, allora il factory pattern è una buona opzione.`;
    console.log(par1);
  }
}

AbsFactoryDigOcean.part4();
