declare class TrafficLight {
    change: Function;
    start: Function;
    constructor();
}
declare class Red {
    light: TrafficLight;
    constructor(light: TrafficLight);
    go(): void;
}
declare class Yellow {
    light: TrafficLight;
    constructor(light: TrafficLight);
    go(): void;
}
declare class Green {
    light: TrafficLight;
    constructor(light: TrafficLight);
    go(): void;
}
declare let light: TrafficLight;
