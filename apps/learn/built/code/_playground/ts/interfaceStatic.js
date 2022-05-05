var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { staticImplements } from '../../../src/Primitive';
/* class decorator */
// function staticImplements<T>() {
//   return <U extends T>(constructor: U) => {
//     constructor;
//   };
// }
console.log(this);
let MyTypeClass = class MyTypeClass {
    /* implements MyType { */ /* so this become optional not required */
    // public static staticProp: string
    static staticProp;
    static staticMethod() {
        return '';
    }
    instanceMethod() { }
};
MyTypeClass = __decorate([
    staticImplements() /* this statement implements both normal interface & static interface */
], MyTypeClass);
