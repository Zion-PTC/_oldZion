"use strict";
class GeoCoder {
    constructor() { }
    getLatLng(address) {
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        }
        else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        }
        else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        }
        else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        }
        else {
            return "";
        }
    }
}
class GeoProxy {
    geocoder = new GeoCoder();
    geocache = {};
    getLatLng(address) {
        if (!this.geocache[address]) {
            this.geocache[address] = this.geocoder.getLatLng(address);
        }
        console.log(address + ": " + this.geocache[address]);
        return this.geocache[address];
    }
    getCount() {
        var count = 0;
        for (var code in this.geocache) {
            count++;
        }
        return count;
    }
    getGeocacheAddress() {
        return console.log(this.geocache["Paris"]);
    }
}
var geo = new GeoProxy();
geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");
console.log("\nCache size: " + geo.getCount());
geo.getGeocacheAddress();
