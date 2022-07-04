export function plus(num1: number, num2: number): number;
export function plus(num1: number, num2: number, num3: number): number;
export function plus(num1: number, num2: number, num3?: number): number {
  if (num3) return num1 + num2 + num3;
  else return num1 + num2;
}

plus(1, 2, 3);

export function toot(not: string): void;
export function toot(not: number): string;
export function toot(not: string | number): string | void {
  if (typeof not === "number") return not.toString();
  else console.log(not);
}

toot(1);
toot("ciao");

function moo(): void;
// function moo(a:string):string
function moo(prop: { a: string }): { a: string };
function moo(
  prop?: { a: string },
  a?: string
): string | { a: string } | undefined {
  if (a && !prop) return a;
  if (prop && !a) return prop;

  return;
}
