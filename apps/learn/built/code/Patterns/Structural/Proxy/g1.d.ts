declare class GeoCoder {
    constructor();
    getLatLng(address: string): "" | "52.3700° N, 4.8900° E" | "51.5171° N, 0.1062° W" | "48.8742° N, 2.3470° E" | "52.5233° N, 13.4127° E";
}
declare class GeoProxy {
    geocoder: GeoCoder;
    geocache: {
        [key: string]: any;
    };
    getLatLng(address: string): any;
    getCount(): number;
    getGeocacheAddress(): void;
}
declare var geo: GeoProxy;
