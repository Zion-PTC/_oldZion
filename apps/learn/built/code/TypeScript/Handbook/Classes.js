"use strict";
class ClassMemebers {
    static ex1() {
        console.log('TypeScript offers full support for the class keyword introduced in ES2015. As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.');
        console.log('');
        console.log('CLASS MEMBERS');
        console.log('Here’s the most basic class - an empty one:');
        class Point {
        }
        console.log('This class isn’t very useful yet, so let’s start adding some members.');
    }
    static fields() {
        console.log('_Fields');
        console.log('--------');
        class Point {
            //@ts-expect-error
            x;
            //@ts-expect-error
            y;
        }
        const pt = new Point();
        pt.x = 0;
        pt.y = 0;
    }
    //@ts-ignore
    static ex2() {
        console.log(`Come per altre luoghi, l'annotazione di tipo annotazione è opzionale, ma sarà un any implicito se nulla viene specificato. I campi possono anche avere inizializatori; questi ultimi verranno avviati automaticamente quando la classe viene instanziata:`);
        class Point {
            x = 0;
            y = 0;
        }
        const pt = new Point();
        console.log(`${pt.x}, ${pt.y}`); // 0, 0
        // return Point;
    }
    static par() {
        console.log('come con const, let and var, gli inizializzatori della proprietà di una classe sarà utilissate per dedurne il tipo');
        class Point {
            x = 0;
            y = 0;
        }
        // let Point = ClassMemebers.ex2();
        const pt = new Point();
        //@ts-expect-error
        pt.x = '0';
    }
    static strictPropertyInitialization() {
        console.log('--strictPropertyInitialization');
        console.log('The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.');
        class BadGreeter {
            //@ts-expect-error
            name;
        }
        class GoodGreeter {
            name;
            constructor() {
                this.name = 'hello';
            }
        }
        console.log('Note that the field needs to be initialized in the constructor itself. TypeScript does not analyze methods you invoke from the constructor to detect initializations, because a derived class might override those methods and fail to initialize the members.');
        console.log('If you intend to definitely initialize a field through means other than the constructor (for example, maybe an external library is filling in part of your class for you), you can use the definite assignment assertion operator, !:');
        class OKGreeter {
            // Not initialized, but no error
            name;
        }
    }
    static readonly() {
        console.log(`I campi possono essere prefissati con un modificatore readonly. Questo previene che l'assegnamento al campo fuori dal costruttore.`);
        class Greeter {
            name = 'world';
            constructor(otherName) {
                //@ts-expect-error
                this.name = otherName;
            }
            err() {
                //@ts-expect-error
                this.name = 'not ok;';
            }
        }
        const g = new Greeter();
        //@ts-expect-error
        g.name = 'also not ok';
    }
    static constructors1() {
        console.log('I costruttori delle classi sono molto simili alle funzioni. Si possono aggiungere dei parametri con ogni tipo di annotazione, valori di default e overloads:');
        class Point {
            x;
            y;
            // Firma normale con valori default
            constructor(x = 0, y = 0) {
                this.x = x;
                this.y = y;
            }
        }
    }
    static constructors2() {
        class Point {
            constructor(xs, y) { }
        }
    }
    static constructor3() {
        console.log('Ci sono solo alcune differenze fra la firma di un costruttore di classe e la firma di una funzione');
        console.log('•I costruttori non possono avere parametri di tipo - questi appartengono alla dichiarazione esterna della classe, di cui parleremo in seguito');
        console.log(`•I costruttori non possono avere un'annotazione di tipo return - il tipo di classe istanziata è sempre il ritorno della funzione.`);
    }
    static constructors4() {
        console.log('SUPER CALLS');
        console.log('Come in Javascript, se si ha una classe base, dovremo chiamare super(); nel corpo del tuo costruttore prima di usare membri this:');
        class Base {
            k = 4;
        }
        class Derived extends Base {
            constructor() {
                //@ts-expect-error
                console.log(this);
                super();
            }
        }
        console.log('Dimenticarsi di chiamere super è un errore semplice da fare in Javascript, ma TS ti dirà quando è necessario.');
    }
    static methods1() {
        console.log('METHODS');
        console.log('Le proprietà funzione in una classe è chiamato metodo. I metodi possono usare tutti gli stessi tipi di annotazione come le funzioni e i costruttori:');
        class Point {
            x = 10;
            y = 10;
            scale(n) {
                this.x *= n;
                this.y *= n;
            }
        }
        const newPoint = new Point();
        console.log('creo una istanza');
        console.log(Point.toString());
        console.log(newPoint);
        newPoint.scale(10);
        console.log('uso il metodo scale con argomento: 10');
        console.log(newPoint);
        console.log('Oltre che alle annotazioni standard tipo, TS non aggiunge altro ai metodi');
        console.log('Da notare che nel corpo di un metodo, è obbligatorio accedere ai campi ed altri metodi via this. Un nome non qualificato nel corpo di un metodo farà sempre riferimento a qualcosa nello scope in cui è incluso');
        function esempio() {
            let x = 0;
            class C {
                x = 'hello';
                m() {
                    // Questo cambia il valore di 'x' iniziale, nella
                    // riga 1, non il membro 'x' della classe
                    //@ts-expect-error
                    x = 'world';
                }
            }
        }
        console.log(esempio.toString());
    }
    static getterSetters1() {
        console.log('Le classi possono anche avere degli accessori:');
        function ex1() {
            class C {
                _length = 0;
                get length() {
                    return this._length;
                }
                set length(value) {
                    this._length = value;
                }
            }
        }
        console.log(ex1.toString());
        console.log('Notare che un campo che utilizza get/set senza una logica aggiuntiva vengono usati raramente in JavaScript. Va bene esporre i campi se non hai bisogno di aggiungere della logica duarente le operazioni di get e set.');
        console.log('Typescript ha sempre delle regole speciali per dedurre gli accessori:');
        console.log('•se esiste un get ma non esiste un set, la proprietà è automaticamente readonly');
        console.log('•se il tipo del parametro del setter non è specificato, lo dedurrà dal tipo del ritorno del getter.');
        console.log('•I membri dei getters e dei setters devono avere la stessa visibilità');
        console.log('A partire da TS 4.3, è possibile avere accessori con tipi diversi per getting e setting.');
        function ex2() {
            class Thing {
                _size = 0;
                get size() {
                    return this._size;
                }
                set size(value) {
                    let num = Number(value);
                    // non permettere NaN, Infinity, etc
                    if (!Number.isFinite(num)) {
                        this._size = 0;
                        return;
                    }
                    this._size = num;
                }
            }
        }
        console.log(ex2.toString());
    }
    static indexSignature1() {
        let h1 = 'Index Signature';
        console.log(h1);
        const p1 = `Le classi possono dichiarare gli indici delle firme; ciò funziona nella stessa maniera che Indici di Firme da tipi di altri oggetti:`;
        console.log(p1);
        function ex1() {
            class MyClass {
                check(s) {
                    return this[s];
                }
            }
            const newClass = new MyClass();
            //@ts-expect-error
            newClass['coo'] = 'coo';
            console.log(newClass.check('coo'));
        }
        console.log(ex1.toString());
        ex1();
        const p2 = `Visto che il tipo dell'indice della firma necessita di carpire anche i tipi dei metodi, non è facile utilizzare in maniera utile questi tipi. Generalmente è meglio registrare i dati indicizzati in un altro posto al posto che nell'istanza della classe stessa.`;
        console.log(p2);
    }
}
class ClassHeritage {
    static intro() {
        const p1 = `Come altri linguaggu con features objct-oriented, le classi in JS possono ereditare da classi base.`;
        console.log(p1);
        const h2 = `implements Clauses`;
        console.log(h2);
        const p2 = `Puoi utilizzare la clausola implements per controllare se una classe soddisfa un'interfaccia particolare. Un errore sarà emesso se una classe fallisce nell'implementarla correttamente:`;
        console.log(p2);
        function ex1() {
            class Sonar {
                ping() {
                    console.log('ping!');
                }
            }
            //@ts-expect-error
            class Ball {
                pong() {
                    console.log('pong!');
                }
            }
            return { Sonar, Ball };
        }
        const { Sonar, Ball } = ex1();
        console.log(ex1.toString());
        const newSonar = new Sonar();
        const newBall = new Ball();
        newSonar.ping();
        newBall.pong();
        const p3 = `Le classi possomo implementare più interfacce, e.g. class C implements A, B {..`;
        console.log(p3);
    }
    static cautions() {
        const h2 = `Cautions`;
        console.log(h2);
        const p1 = `É importante capire che una clausola implements è solo un sistema di controllo che la classe possa essere utilizzata come il tipo dell'interfaccia. Non ne cambia il tipo o il tipo dei suoi metodi. Una causa comune di errori deriva dal credere che una clausola implements cambi il tipo della classe - non lo fa!`;
        console.log(p1);
        function ex2() {
            class NameChecker {
                // 'check' include implicitamente un tipo restituito
                // 'any', ma è possibile dedurre un tipo migliore
                // dall'utilizzo.ts(7050)
                //@ts-expect-error
                check(s) {
                    // notare come qui non da errore
                    return s.toLowercse() === 'ok';
                }
            }
        }
        console.log(ex2.toString());
        const p3 = `In qusto esempio, probabilmente ci saremmo aspettati che il tipo di s sia influenzato dal parametro name: string di check. Non è così - la clausola implements con cambia come il corpo della classe è controllato o di come se ne deduca il tipo`;
        console.log(p3);
        const p4 = `In maniera simile implementando u interfaccia con una proprietà opzionalie non crea quella proprietà.`;
        console.log(p4);
        function ex3() {
            class C {
                x = 0;
            }
            const c = new C();
            // La proprietà 'y' non esiste nel tipo 'C'.ts(2339)
            //@ts-expect-error
            c.y = 10;
        }
        console.log(ex3.toString());
        const h2_1 = `extends Clauses`;
        console.log(h2_1);
        const p5 = `Le classi possono estendere da una classe base. Una classe derivata ha tutte le proprietà e i metodi della classe base, e definisce inoltre membri addizionali.`;
        function ex4() {
            class Animal {
                move() {
                    console.log('Moving along!');
                }
            }
            class Dog extends Animal {
                woof(times) {
                    for (let i = 0; i < times; i++) {
                        console.log('woof');
                    }
                }
            }
            const d = new Dog();
            // Base class method
            d.move();
            // Derived class method
            d.woof(3);
        }
        console.log(p5);
        console.log(ex4.toString());
        ex4();
        const h2_2 = `Overriding Methods`;
        console.log(h2_2);
        const p6 = `Una classe derivata può anche overridare i campi o le proprietà di una classe base. Puoi usare la sintassi super per accedere ai metodi della classe base. Notare che, visto che le classi in JS sono seplice oggetti di lookup, non c'è nozione di un 'super-campo'.`;
        console.log(p6);
        const p7 = `Typescript rinforza che una classe derivata è sempre un sotto tipo della sua classe base.`;
        console.log(p7);
        const p8 = `Ad esempio, qui è un modo legale di sovrascrivere un metodo:`;
        function ex5() {
            class Base {
                greet() {
                    console.log('Hello, world!');
                }
            }
            class Derived extends Base {
                greet(name) {
                    if (name === undefined) {
                        super.greet();
                    }
                    else {
                        console.log(`Hello, ${name.toUpperCase()}`);
                    }
                }
            }
            const d = new Derived();
            d.greet();
            d.greet('reader');
            return Base;
        }
        console.log(ex5.toString());
        ex5();
        const p9 = `É importante che una classe derivata segua il contratto della sua classe base. Ricorda che è molto comune(e sempre illegale!!) riferirsi ad un'istanza di una classe derivata attraverso un riferimento alla classe base.`;
        console.log(p9);
        function ex6() {
            class Base {
                greet() {
                    console.log('Hello, world!');
                }
            }
            class Derived extends Base {
                greet(name) {
                    if (name === undefined) {
                        super.greet();
                    }
                    else {
                        console.log(`Hello, ${name.toUpperCase()}`);
                    }
                }
            }
            const d = new Derived();
            // Alias l'istanza derivata attraverso un riferimento
            // verso una classe base
            const b = d;
            // No problem
            b.greet();
        }
        console.log(ex6.toString());
        ex6();
        const p10 = `Cosa succede se Derived non segue il contratto di Base?`;
        console.log(p10);
        function ex7() {
            class Base {
                greet() {
                    console.log('Hello, world!!');
                }
            }
            class Derived extends Base {
                // Make this parameter required
                //@ts-expect-error
                greet(name) {
                    // La proprietà 'greet' nel tipo 'Derived' non è
                    // assegnabile alla stessa proprietà nel tipo di
                    // base 'Base'. Il tipo '(name: string) => void'
                    // non è assegnabile al tipo '() => void'.ts(2416)
                    console.log(`Hello, ${name.toUpperCase()}`);
                }
            }
            return { Base, Derived };
        }
        console.log(ex7.toString());
        const p11 = `Se compilassimo questo codice anche se ci sono gli errori, questo campione emetterebbe un errore:`;
        function ex8() {
            class Base {
                greet() {
                    console.log('Hello, world!!');
                }
            }
            class Derived extends Base {
                // Make this parameter required
                //@ts-expect-error
                greet(name) {
                    // La proprietà 'greet' nel tipo 'Derived' non è
                    // assegnabile alla stessa proprietà nel tipo di
                    // base 'Base'. Il tipo '(name: string) => void'
                    // non è assegnabile al tipo '() => void'.ts(2416)
                    console.log(`Hello, ${name.toUpperCase()}`);
                }
            }
            //@ts-expect-error
            const b = new Derived();
            // Crasha perchè 'name' sarà indefinita.
            b.greet();
        }
        try {
            ex8();
        }
        catch (error) {
            //@ts-expect-error
            console.log(error.message);
        }
        const h2_3 = `Dichiarazione di campo Type-only`;
        console.log(h2_3);
        const p12 = `Quando target >= ES2022 o useDefineForClassFields è vero, i campi delle classi sono inizializzati dopo il completamento del costruttore delle classe genitrici, sovrascrivendo ogni valore settato dalla classe parente. Questo puo essere un problema quando vuoi soltanto ri-dichiarare con un tipo piu accurato per un campo ereditato. Per affrontare questi casi, puoi scrivere declare per indicare a TS che non ci dovrebbero essere effetti in runtime per questa dichiarazione di campo.`;
        console.log(p12);
        function ex9() {
            class AnimalHouse {
                resident;
                constructor(animal) {
                    this.resident = animal;
                }
            }
            class DogHouse extends AnimalHouse {
                constructor(dog) {
                    super(dog);
                }
            }
        }
        console.log(ex9.toString());
        ex9();
    }
    static intializationOrder() {
        const h2 = `Inizialization Order`;
        console.log(h2);
    }
}
ClassHeritage.intializationOrder();
