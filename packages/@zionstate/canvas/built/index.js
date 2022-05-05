import c from 'canvas';
let {} = c;
let freetypeVersion = c.freetypeVersion;
let gifVersion = c.gifVersion;
let jpegVersion = c.jpegVersion;
let loadImage = c.loadImage;
let registerFont = c.registerFont;
let rsvgVersion = c.rsvgVersion;
let version = c.version;
let cairoVersion = c.cairoVersion;
let createCanvas = c.createCanvas;
let createImageData = c.createImageData;
let exportObj = {
    freetypeVersion,
    gifVersion,
    jpegVersion,
    loadImage,
    registerFont,
    rsvgVersion,
    version,
    cairoVersion,
    createCanvas,
    createImageData,
};
export default exportObj;
