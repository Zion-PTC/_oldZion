interface IClass {
    membro: string;
    membri: IClass[];
    foo1(): void;
}
declare type foo1Type = typeof foo1;
declare const foo1: () => void;
declare class Class implements IClass {
    membro: string;
    membri: Class[];
    foo1: foo1Type;
}
declare const ClassFactory: () => IClass;
declare let instanza: IClass;
declare let classe: IClass;
interface IChildClaas extends IClass {
}
declare class ChildClass extends Class implements IChildClaas {
}
declare let child: ChildClass;
declare class Blarg {
    id: string;
    show(): void;
}
declare let bla: Blarg;
