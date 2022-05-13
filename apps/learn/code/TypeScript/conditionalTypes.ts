type Diesel = { type: 'bio' | 'synt' | 'petrol' };
type Benzin = { type: 'hybrid' | 'coventional' };
type Bus = { engine: Diesel };
type Car = { engine: Benzin };
type Engine<T> = T extends { engine: unknown } ? T['engine'] : never;
type BusEngine = Engine<Bus>;
const busEngine: BusEngine = {
  type: 'bio',
};

enum Priority {
  mustHave,
}

const backlog = {
  releases: [
    {
      name: 'Sprint1',
      epics: [
        {
          name: 'Account Manager',
          tasks: [
            { name: 'Single Sign On', priority: Priority.mustHave },
            { name: 'Email notifications', priority: Priority.mustHave },
          ],
        },
      ],
    },
  ],
};

type Unarray<T> = T extends Array<infer U> ? U : T;
type Release = Unarray<typeof backlog['releases']>;
