var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
export function staticImplements() {
    return (constructor) => {
        constructor;
    };
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
export class APrimitive {
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
