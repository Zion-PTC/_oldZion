import c, {
  Canvas as cCanvas,
  CanvasGradient as cCanvasGradient,
  CanvasPattern as cCanvasPattern,
  CanvasRenderingContext2D as cCanvasRenderingContext2D,
  DOMMatrix as cDOMMatrix,
  DOMPoint as cDOMPoint,
  JPEGStream as cJPEGStream,
  JpegConfig as cJpegConfig,
  Image as cImage,
  ImageData as cImageData,
  NodeCanvasRenderingContext2DSettings as cNodeCanvasRenderingContext2DSettings,
  PDFStream as cPDFStream,
  PNGStream as cPNGStream,
  PdfConfig as cPdfConfig,
  PngConfig as cPngConfig,
} from 'canvas';

export type Canvas = cCanvas;
export type CanvasGradient = cCanvasGradient;
export type CanvasPattern = cCanvasPattern;
export type CanvasRenderingContext2D = cCanvasRenderingContext2D;
export type DOMMatrix = cDOMMatrix;
export type DOMPoint = cDOMPoint;
export type JPEGStream = cJPEGStream;
export type JpegConfig = cJpegConfig;
export type Image = cImage;
export type ImageData = cImageData;
export type NodeCanvasRenderingContext2DSettings =
  cNodeCanvasRenderingContext2DSettings;
export type PDFStream = cPDFStream;
export type PNGStream = cPNGStream;
export type PdfConfig = cPdfConfig;
export type PngConfig = cPngConfig;

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
