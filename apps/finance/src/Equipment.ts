enum EquipmentScopes {
  softwareDevelopment = "software-development",
  music = "music",
  server = "server",
  visualArt = "visual-art",
}
type EquipmentScopeTypes = keyof typeof EquipmentScopes;

class Equipment {
  constructor(
    public name: string,
    public price: Price,
    public model: string = "model",
    public brand: string = "brand",
    public scopes: EquipmentScopeTypes[] = ["music"],
    public link?: [URL],
    public year?: number
  ) {}
}

let raspBerryPi4 = new Equipment("Raspberry Pi 4", new Price(100));
raspBerryPi4.scopes.pop();
raspBerryPi4.scopes.push("server");
raspBerryPi4.link = [
  new URL(
    "https://www.kubii.it/raspberry-pi-4-modello-b/3011-kit-raspberry-pi4-4gb-3272496302112.html"
  ),
];

let iPadPro = new Equipment("IPad Pro", new Price(1000));
iPadPro.scopes.push("visualArt");

let macBookPro = new Equipment('MacBookPro 15"', new Price(2900));
macBookPro.scopes.push("softwareDevelopment");
macBookPro.scopes.push("visualArt");
macBookPro.link = [
  new URL(
    "https://www.apple.com/it/shop/buy-mac/macbook-pro/16%22-grigio-siderale-cpu-10-core-gpu-16-core-512gb"
  ),
];

let superWideScreen = new Equipment("SuperWideScreen", new Price(1000));
macBookPro.scopes.push("softwareDevelopment");
macBookPro.scopes.push("visualArt");

let raspBerryCase = new Equipment("Raspberry Cluster Case", new Price(90));
