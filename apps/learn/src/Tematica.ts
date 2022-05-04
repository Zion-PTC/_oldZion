type Tag =
  | 'Linguaggio di Programmazione'
  | 'Design Pattern'
  | 'Framework'
  | 'Libreria';

export interface ITematica {
  id: number;
  nome: string;
  tag: string;
}
