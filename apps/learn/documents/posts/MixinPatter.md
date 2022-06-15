# Mixin Pattern in Typescript e Javascript

## Introduzione

Il mixin pattern permette di creare delle classi sfruttando
la composizione. </br> In questo post cerco di analizzare la
struttura del pattern mixin e come questo possa essere
utilizzato in Javascript e Typescript, con il fine di
sviluppare un pattern da utilizzare nella realizzazione dei
software di [Zion](https://znft.tech)
Come si puo leggere sulla pagina di Typescript:

> Along with traditional OO hierarchies, another popular way
> of building up classes from reusable components is to build
> them by combining simpler partial classes. You may be
> familiar with the idea of mixins or traits for languages
> like Scala, and the pattern has also reached some
> popularity in the JavaScript community.

Il pattern Mixin viene utilizzato quando abbiamo dei motodi a
scopo 'generale' che vogliamo riutilizzare in altre classe.
Per fare ciò si creanno delle classi nelle quali si
inseriscono i metodi da passare alle altre classi. Come
menzionato da [Ross Armes]() e [Dustin Diaz]() nel libro '[Pro JavaScript Design Patterns](https://www.amazon.it/JavaScript-Design-Patterns-Dustin-Diaz/dp/159059908X/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=EW5NO3MEH0W6&keywords=Pro+JavaScript+Design+Patterns&qid=1654452972&s=books&sprefix=pro+javascript+design+patterns%2Cstripbooks%2C98&sr=1-1)':

> These classes with the general-purpose methods are called
> _mixin_ classes. They are usually not instantiated or called
> directly. They exist only to pass on their methods to other
> classes.

## Cos'è esattamente il Mixin pattern

> A mixin is an abstract subclass; i.e. a subclass
> definition that may be applied to different superclasses
> to create a related family of modified
> classes.</br></br>_Gilad Bracha and William Cook_,
> [_Mixin-based
> Inheritance_](http://www.bracha.org/oopsla90.pdf)

tradotto:</br>
un _Mixin_ è una sottoclasse astratta: una definizione di
Subclass che può **essere applicata a diverse superclassi**, per
crare una famiglia connessa di classi modificate.

## Pro JavaScript Design Patterns

> Questo pattern non funziona con la sintassi ES6 (`class Mixin {}`)

```js
/* Mixin class. */

var Mixin = function () {};
Mixin.prototype = {
  serialize: function () {
    var output = [];
    for (let key in this) {
      output.push(key + ": " + this[key]);
    }
    return output.join(", ");
  },
};
```

Amos e Ross suggeriscono l'utilizzo di una funzione
`augment()`:

```js
var Author = function (name) {
  this.name = name;
};

augment(Author, Mixin);

var author = new Author("Ross Harmes", ["JavaScript Design Patterns"]);
var serializedString = author.serialize();
```

```js
/* Augment function. */

function augment(receivingClass, givingClass) {
  for (let methodName in givingClass.prototype) {
    if (!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}
console.log(serializedString);
//
//  name: Ross Harmes, serialize: function () {
//    var output = [];
//    for (let key in this) {
//      output.push(key + ": " + this[key]);
//    }
//    return output.join(", ");
//  }
//
```

Per migliorare questo pattern, ad esempio nel caso in cui la
classe Mixin contenga più di un metodo, possiamo ad esempio
fare in modo che la funzione accetti un argomento
aggiuntivo, ovvero il nome della funziona da aggiungere alla
classe:

```jsx
/* Augment function, improved. */

function augmentImproved(receivingClass, givingClass) {
  if (arguments[2]) {
    // Only give certain methods.

    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] =
        givingClass.prototype[arguments[i]];
    }
  } else {
    // Give all methods.

    for (methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] =
          givingClass.prototype[methodName];
      }
    }
  }
}

var MixinMoreMethods = function () {};
MixinMoreMethods.prototype = {
  serialize: Mixin.prototype.serialize,
  log: function () {
    console.log("logged =)");
    return;
  },
};
```

a questo punto possiamo chiamare la funzione
`augment(Author, Mixin, 'log')` e passare `'log'` ed
aggiungere solo il metodo selezionato.

```jsx
augmentImproved(Author, MixinMoreMethods, "log");
var author2 = new Author("Gagliano Giacomo", [
  "Mixin Pattern in Typescript e Javascript",
]);
author2.log(); // logged =)
```

Non so per quale motivo ma come menzionato precedentemente,
questo metodo non è utilizzabile con la sintassi ES6.
Inoltre questo metodo non permette di sfruttare la funzione
intellisense di Visual Code. Per questo motivo cerchiamo di
analizzare come possiamo implementare questo pattern con
Typescript, cosa che ci permetterà di fare in modo che gli
oggetti creati con le classi _aumentate_ ci facciano
beneficiare dell'interference di VisualCode.

Prima di farlo però, cerchiamo di capire meglio, con altri
esempi, che magari usino la sintassi ES6, come funziona il
Mixin pattern.

## Real mixins with javascript classes, The Good, the Bad, and the Ugly

In questo post analizzo il post di Jusin Fagnani, [Real
mixins with javascript classes, The Good, the Bad, and the
Ugly](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)
nel quale Justin cerca di analizzare in quale modo sia
possibile implementare il pattern _mixin_ in Javascript

> con la nuova sintassi di JS (_class_) è possibile
> utilizzare questo pattern grazie alla flessibilità di JS.

Justin suggerisce di scavare piu a fondo nelle implicazioni
derivate dalla definizione di Mixin class aggiungendo due
termini al nostro lessico:

- _definizione di mixin_: definizione di una classe che può
  essere applicata a delle super classi.
- _applicazione mixin_: l'applicazione di una definizione ad
  una superclass specifica, producendo delle nuove
  sottoclassi.

Una classe Mixin è effettivamete una _subclass factory_, che
viene parametrata dall super class.</br>
L'unica vera differenza fra una classe _mixin_ e una normale
_subclass_ è che una subclass _normale_ ha una _superclass_
fissa, mentre una definizione di una classe mixin _non ha
ancora_ una superclass. Solo le applicazioni mixin hanno
le propria superclassi. In effetti si potrebbe alle
subclassi generate tramite ereditarietà, come una forma
degenerata di ereditarietà di tipo mixin nelle quali:

- la superclasse è conosciuta al momento della definizione
- esiste una sola applicazione della stessa.

### Bad Mixin

La maggior parte dei pattern che implementano la classe
mixin falliscono per vari motivi. As esempio una
implementazione come questa:

```jsx
function mixin(source, target) {
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    }
  }
}
```

e questa funzione mixin viene solitamente chiamata sul
`prototype`:

```jsx
mixin(MyMixin, MyClass.prototype);
```

A questo punto la classe MyClass ha tutti le proprietà e
metodi definiti in MyMixin.

### **Cosa c'è di male in ciò?**

Questo metodo di implementazione provoca alcuni problemi,
certi possono essere evitati tramite delle funzioni di mixin
abbastanza intelligenti, ma in generale possono portare
questi problemi:

### `super()` non funziona

I mixin dovrebbero supportare la chiamata al costruttore
della superclasse. Copiando le funzioni super non
funzionerà.

### Precendenza incorretta

Questo non è necessariamente sempre il caso, ma spesso,
utilizzando questo tipo di implementazione, i metodi della
classe mixin prendono la precedenza sui metodi della subclass.
Dovrebbero prendere la precedenza esclusivamente sui metodi
della superclasse, permettendo alla subclass di
sovrascrivere i metodi della classe mixin.

### La composizione è compromessa

I mixins spesso devono delegare ad altri mixin o altri
oggetti nella prototype chain. Siccome le funzioni sono
copiate sugli oggetti, delle implementazioni naif possono
sovrascrivere implementazioni precedenti. Librerie più
sofisticate si ricordano dei metodi già esistenti, e
potrebbero chiamare molteplici metodi con lo stesso nome, e
le librerie devono trovare delle scorciatoie per eliminare
questi problemi.

I riferimenti a delle funzioni sono duplicati in tutte le
applicazioni del mixin, quando in molti casi potrebbero
essere messe in un bundle in un prototypo condiviso. In
questo modo si perdono molte delle proprietà dinamiche di
JS.

## Mixin migliori con espressioni `class`.

Justin ci introduce a: _Awesome Mixins™ 2015 Edition_

Ecco una lista delle cose che vorremmo che i nostri mixin
facessero:

1. I mixin sono aggiunti alla prototype chain.
2. sono applicati senza modificare gli oggetti esistenti.
3. non fanno nessuna magia, e non definiscono nuove
   semantiche sul linguaggio che stiamo usando.
4. l'accesso alla proprietà `super.foo` funziona nei mixin e
   nelle subclassi.
5. `super()` funziona nei costruttori.
6. i mixin sono in grado di estendere altri mixin.
7. `instanceOf` funziona.
8. le definizione dei mixin non richiedono supporto per
   delle librerie - possono essere scritti con uno stile
   universale.

## Subclass Factories con questo Trick Speciale

Justin si riferisce ai mixin come "factory di sottoclassi,
parametrizzate dalla superclasse", e nella formulazione che
segue sono esattamente questo.

Facciamo uso di due nuove feature di JS;

> l'autore del post scrive nel 2015, _ndr_

1. `class` può essere usato sia nelle espressioni che negli
   statements. Usata come espressione ritorna una nuova
   classe ogni volta che viene valutato. (un po come una
   factorty!)
2. la clausola `extends` accetta delle espressioni
   arbitrarie che ritornano classi o costruttori.

> La chiave p che le classi in JS sono first-class: sono
> valoti che possono essere passati e ritornati dalle funzioni

Dobbiamo definire che un mixin è una funzione che accetta
una superclasse e crea una subclasse da essa, in questo
modo:

```jsx
let MyMixin = (superclass) =>
  class extends superclass {
    foo() {
      console.log("foo from MyMixin");
    }
  };
```

A questo punto possiamo usare la clausola `extends` in
questo modo:

```jsx
class MyClass extends MyMixin(MyBaseClass) {
  /* ... */
}
```

Ed ora `MyClass` possiede il metodo `foo` tramite
eriditarietà mixin:

```jsx
let c = new MyClass();
c.foo(); // prints "foo from MyMixin"
```

> Super semplice ed efficace!!

Possiamo anche applicare molteplici mixin:

```jsx
class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
  /* ... */
}
```

I mixin possono ereditare da altre mixin passando la superclass:

```jsx
let Mixin2 = (superclass) =>
  class extends Mixin1(superclass) {
    /* Add or override methods here */
  };
```

e si puo usare la normale composizione per comporre i
mixins:

```jsx
let CompoundMixin = (superclass) => Mixin2(Mixin3(superclass));
```

## Benefici dell'utilizzare Mixins come Subclass Factories

Questo approcio ci da una buona implementazione dei mixins

### Le subclassi possono sovrascrivere i metodi del mixin.

Come detto in precedenza, molte implementazioni di JS mixins
lo fanno in un modo scorretto, e i mixin sovrascrivono le
sublcassi. Con il questo approcio le subclassi sovrascrivono
correttamente i metodi dei mixin che sovrascrivono i metodi
delle superclassi.

### `super` funziona

Uno dei piu grandi benefici è che `super` funziona nei
metodi delle subclasi e dei mixins. Siccome non dobbiamo mai
sovra*scrivere* i metodid nelle classi o nei mixins, sono
sempre accessibili dalla chiamata `super`.

La chiamata a `super` puo essere un po controintuitiva per i
neofiti dei mixins perché la superclass non è conosciuta nel
momento in cui il mixin è definito, e a volte gli
sviluppatori si aspettano che `super` punti verso la
superclass dichiarata (l'argomento della funzione mixin),
non all'applicazione del mixin. Pensare alla catena dei
prototipi può aiutare in questo caso.

### La composizione è mantenuta.

Questo è semplicemente la conseguenza degli altri benefici,
ma due mixins possono definire lo stesso metodo, e, fino a
quando entrambi chiamano `super`, entrami saranno invocati
ed applicati.

A volte un mixin non saprà se la superclasse abbia un
particolare metodo o proprietà, quindi è meglio avere una
guardia per la chiamata `super`;

```jsx
et Mixin1 = (superclass) => class extends superclass {
  foo() {
    console.log('foo from Mixin1');
    if (super.foo) super.foo();
  }
};

let Mixin2 = (superclass) => class extends superclass {
  foo() {
    console.log('foo from Mixin2');
    if (super.foo) super.foo();
  }
};

class S {
  foo() {
    console.log('foo from S');
  }
}

class C extends Mixin1(Mixin2(S)) {
  foo() {
    console.log('foo from C');
    super.foo();
  }
}

new C().foo();
```

imprime sulla console:

```jsx
foo from C
foo from Mixin1
foo from Mixin2
foo from S
```

## Migliorare la sintassi

Justin ritiene che applicare mixins come funzioni sia una
soluzione semplice ed elegante - che descrive esattamente
cosa sta succedendo, ma anche un po brutto allo stesso
tempo. Il suo problema piu grande è che la costruzione non è
ottimizzata per dei lettori che non hanno familiarità con
questo pattern.

> Vorrei una sintassi che sia più facile all'occhio e che dia
> ai nuovi lettori qualche cosa da ricercare per spiegare
> cosa stia succedendo. Mi piacerebbe anche aggiungere pià
> features come memorizzare le applicazioni del mixin e
> implementare automaticamente il supporto per `instanceOf`.

Justin succerisce di scrivere un semplice helper che applica
una lista dei mixins ad una superclass, in uno stile API:

```jsx
class MyClass extends mix(MyBaseClass).with(Mixin1, Mixin2) {
  /* ... */
}
```

Ecco que il codice:

```jsx
let mix = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
```

Questa funzione permette di scrivere il mixin in maniera
tale da poter utilizzare una sintassi che sia semplice da leggere.

### Costruttore e inizializzazione

I costruttori sono una potenziale sorgente di confusione nei
mixins. Si comportano come dei metodi, a parte il fatto che
i metodi sovrascritti avranno la stessa signature, mentre i
costruttori in una gerarchi di ereditarietà hanno spesso
firme diverse.

Siccome un mixin non sa a cosa la superclass sara applicata,
e quindi non conosce la firma del suo super-costruttre,
chiamare `super()` può essere insidioso. Il modo migliore
per risolver questo problema è di passare sempre tutti gli
argomenti del costruttore a `super()`, o non definendo del
tutto il costruttore, o usando lo spread operator
super(...arguments).

> Questo significa che passare degli argomenti specifici al
> costruttore di un mixin è difficile. Un workaround a
> questo problema e di semplicemente avere
> un'inizializzazione esplicita dei metodi nel mixin se lo
> stesso richiede argomenti.
