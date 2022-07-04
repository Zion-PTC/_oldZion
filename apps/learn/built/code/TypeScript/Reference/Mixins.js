export class Sprite {
    name = "";
    x = 0;
    y = 0;
    constructor(name) {
        this.name = name;
    }
}
function Scale(Base) {
    return class Scaling extends Base {
        _scale = 1;
        setScale(scale) {
            this._scale = scale;
        }
        get scale() {
            return this._scale;
        }
    };
}
const EightBitSprite = Scale(Sprite);
const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
