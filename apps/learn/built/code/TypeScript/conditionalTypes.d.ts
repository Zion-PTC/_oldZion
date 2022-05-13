declare type Diesel = {
    type: 'bio' | 'synt' | 'petrol';
};
declare type Benzin = {
    type: 'hybrid' | 'coventional';
};
declare type Bus = {
    engine: Diesel;
};
declare type Car = {
    engine: Benzin;
};
declare type Engine<T> = T extends {
    engine: unknown;
} ? T['engine'] : never;
declare type BusEngine = Engine<Bus>;
declare const busEngine: BusEngine;
declare enum Priority {
    mustHave = 0
}
declare const backlog: {
    releases: {
        name: string;
        epics: {
            name: string;
            tasks: {
                name: string;
                priority: Priority;
            }[];
        }[];
    }[];
};
declare type Unarray<T> = T extends Array<infer U> ? U : T;
declare type Release = Unarray<typeof backlog['releases']>;
