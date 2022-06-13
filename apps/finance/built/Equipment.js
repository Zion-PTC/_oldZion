import { Price } from "./Price.js";
var EquipmentScopes;
(function (EquipmentScopes) {
    EquipmentScopes["softwareDevelopment"] = "software-development";
    EquipmentScopes["music"] = "music";
    EquipmentScopes["server"] = "server";
    EquipmentScopes["visualArt"] = "visual-art";
})(EquipmentScopes || (EquipmentScopes = {}));
export class Equipment {
    name;
    price;
    model;
    brand;
    scopes;
    link;
    year;
    constructor(name, price, model = "model", brand = "brand", scopes = ["music"], link, year) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.brand = brand;
        this.scopes = scopes;
        this.link = link;
        this.year = year;
    }
}
export let raspBerryPi4 = new Equipment("Raspberry Pi 4", new Price(150));
raspBerryPi4.scopes.pop();
raspBerryPi4.scopes.push("server");
raspBerryPi4.link = [
    new URL("https://www.kubii.it/raspberry-pi-4-modello-b/3011-kit-raspberry-pi4-4gb-3272496302112.html"),
];
export let iPadPro = new Equipment("IPad Pro", new Price(1000));
iPadPro.scopes.push("visualArt");
export let iPadPencil = new Equipment("iPad Pencil", new Price(90));
export let macBookPro = new Equipment('MacBookPro 15"', new Price(2900));
macBookPro.scopes.push("softwareDevelopment");
macBookPro.scopes.push("visualArt");
macBookPro.link = [
    new URL("https://www.apple.com/it/shop/buy-mac/macbook-pro/16%22-grigio-siderale-cpu-10-core-gpu-16-core-512gb"),
];
export let superWideScreen = new Equipment("SuperWideScreen", new Price(1000));
macBookPro.scopes.push("softwareDevelopment");
macBookPro.scopes.push("visualArt");
export let raspBerryCase = new Equipment("Raspberry Cluster Case", new Price(90));
