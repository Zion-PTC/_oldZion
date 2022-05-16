var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { createHash } from 'crypto';
import { v5 as uuid, validate, } from 'uuid';
class UUID {
    static #validate = validate;
    value;
    from;
    constructor(string, from) {
        if (!UUID.#validate(string)) {
            throw new Error('La string passata non è un codice uuid valido');
        }
        this.value = string;
        this.from = from;
    }
}
class ANamespacedUUID {
}
class NamespacedUUID {
    MY_SPACE_UUID;
    uuid = uuid;
    uuids = [];
    get latestUUID() {
        return this.uuids[this.uuids.length - 1].value;
    }
    constructor(namespace) {
        this.MY_SPACE_UUID = new UUID(this.creaNamespaceUUID(namespace).MY_SPACE_UUID, namespace);
    }
    validate = validate;
    creaNamespaceUUID = creaNamespaceUUID;
    creaNamespacedUUID = creaNamespacedUUID;
}
class Hasher {
    NamespaceUUID = NamespacedUUID;
    hash;
    hashString = hashString;
    creaUuidFromString = creaUuidFromString;
    splittaHash = splittaHash;
    mostraValore = mostraValore;
    validate = validate;
}
console.log(new Hasher());
/**
 * classe astratta utilizzata per migliorare la versione
 */
class APrimitive {
    static id;
    id;
    constructor() { }
}
let Primitive = class Primitive extends APrimitive {
};
Primitive = __decorate([
    staticImplements()
], Primitive);
export { Primitive };
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
function mostraValore() {
    console.log(this.hash);
    return this;
}
function hashString(string) {
    this.hash = createHash('sha1').update(string).digest('hex');
    return this;
}
function creaUuidFromString() {
    if (!this.hash) {
        this.hash = createHash('sha1')
            .update('diamogli qualche cosa da hashare')
            .digest('hex');
    }
    const M = ['1', '2', '3', '4', '5'];
    const N = ['8', '9', 'a', 'b'];
    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    let split = this.hash.split('');
    const { hex1, hex2, hex3, hex4, hex5 } = this.splittaHash(split);
    let unite = [
        hex1,
        hex2,
        [M[randomIndex(M)], hex3].join(''),
        [N[randomIndex(N)], hex4].join(''),
        hex5,
    ];
    this.hash = unite.join('-');
    return this;
}
function splittaHash(split) {
    let hex1 = split.splice(0, 8).join('');
    let hex2 = split.splice(0, 4).join('');
    let hex3 = split.splice(0, 3).join('');
    let hex4 = split.splice(0, 3).join('');
    let hex5 = split.splice(0, 12).join('');
    return { hex1, hex2, hex3, hex4, hex5 };
}
function creaNamespaceUUID(string) {
    this.MY_SPACE_UUID = this.uuid(string, this.uuid.DNS);
    return this;
}
function creaNamespacedUUID(string) {
    this.uuids.push(new UUID(this.uuid(string, this.MY_SPACE_UUID.value), string));
    return this;
}
function staticImplements() {
    return (constructor) => {
        constructor;
    };
}
function test() {
    class ABoo {
        static #aboos = [];
        id;
        constructor() {
            ABoo.#aboos.push(this);
            this.id = ABoo.#aboos.length;
        }
    }
    class Ciao {
        culo;
        constructor() {
            this.culo = 'culo';
        }
        id = 'p';
    }
    class Vlod {
        constructor() {
            return Ciao;
        }
    }
    function constr() {
        return (constructor) => { };
    }
    function too(clObj) {
        class V extends Ciao {
        }
        Object.defineProperty(V, 'name', { value: clObj });
        return V;
    }
    let Cao = too('Cao');
    console.log(Cao);
    function moo() {
        return (c) => {
            c;
        };
    }
    let Bao = moo();
    console.log(Bao(new Ciao()));
    let B = () => {
        let g;
        return g;
    };
    let bobo = B();
    console.log(bobo);
}
function test2() {
    const b = {
        ['ciao']: '',
        [0]: 'ciap',
        ['doooo']: '',
    };
    console.log(b);
}
function interfaceMaker() {
    return;
}
function multipleInterfaceImplmentation() {
    function createClass(name) {
        let NEW = class NEW {
            static ids;
            id = 'id';
            bot = 'bot';
        };
        NEW = __decorate([
            staticImplements()
        ], NEW);
        Object.defineProperty(NEW, 'name', { value: name });
        return NEW;
    }
    const NewClass = createClass('NewClass');
    const instance = new NewClass();
    console.log(instance);
}
