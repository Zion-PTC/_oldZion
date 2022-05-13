import { Headers, HeaderInit } from 'node-fetch';

export interface IZionHeader extends Headers {}

export type ZionHeaderInit =
  | Headers
  | string[][]
  | {
      [key: string]: string;
    };

abstract class HeadersDescription implements IZionHeader {
  abstract append(name: string, value: string): void;
  abstract delete(name: string): void;
  abstract entries(): IterableIterator<[string, string]>;
  abstract forEach(callback: (value: string, name: string) => void): void;
  abstract get(name: string): string | null;
  abstract has(name: string): boolean;
  abstract keys(): IterableIterator<string>;
  abstract raw(): { [k: string]: string[] };
  abstract set(name: string, value: string): void;
  abstract values(): IterableIterator<string>;
  abstract [Symbol.iterator]: () => Iterator<[string, string], any, undefined>;
}

export class ZionHeaders extends Headers implements IZionHeader {
  constructor(init?: ZionHeaderInit | undefined) {
    super(init);
  }
}
