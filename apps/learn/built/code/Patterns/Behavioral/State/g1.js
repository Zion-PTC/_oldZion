"use strict";
class TrafficLight {
    change;
    start;
    constructor() {
        let count = 0;
        let currentState = new Red(this);
        this.change = function (state) {
            if (count++ >= 10)
                return;
            currentState = state;
            currentState.go();
        };
        this.start = function () {
            currentState.go();
        };
    }
}
class Red {
    light;
    constructor(light) {
        this.light = light;
    }
    go() {
        console.log("Red --> for 1 minute");
        this.light.change(new Green(this.light));
    }
}
class Yellow {
    light;
    constructor(light) {
        this.light = light;
    }
    go() {
        console.log("Yellow --> for 10 seconds");
        this.light.change(new Red(this.light));
    }
}
class Green {
    light;
    constructor(light) {
        this.light = light;
    }
    go() {
        console.log("Green --> for 1 Minute");
        this.light.change(new Yellow(this.light));
    }
}
let light = new TrafficLight();
light.start();
