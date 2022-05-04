// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IStaticLink = Knowledge.IStaticLink;

////// <reference path='../Namespaces/Knowledge.ts'/>

export interface IStaticLink {
  id: string;
}
interface ILink {}

abstract class Link implements IStaticLink {
  id: string;
}
