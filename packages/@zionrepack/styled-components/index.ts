import { FunctionComponent } from 'react';
import * as styled from 'styled-components';
import def, {
  withTheme as styledwithTheme,
  AnyStyledComponent as styledAnyStyledComponent,
  BaseThemeProviderComponent as styledBaseThemeProviderComponent,
  BaseThemedCssFunction as styledBaseThemedCssFunction,
  BaseWithThemeFnInterface as styledBaseWithThemeFnInterface,
  CSSKeyframes as styledCSSKeyframes,
  CSSObject as styledCSSObject,
  CSSProp as styledCSSProp,
  CSSProperties as styledCSSProperties,
  CSSPseudos as styledCSSPseudos,
  DefaultTheme as styledDefaultTheme,
  FalseyValue as styledFalseyValue,
  FlattenInterpolation as styledFlattenInterpolation,
  FlattenSimpleInterpolation as styledFlattenSimpleInterpolation,
  GlobalStyleComponent as styledGlobalStyleComponent,
  Interpolation as styledInterpolation,
  InterpolationFunction as styledInterpolationFunction,
  InterpolationValue as styledInterpolationValue,
  IntrinsicElementsKeys as styledIntrinsicElementsKeys,
  Keyframes as styledKeyframes,
  OmitU as styledOmitU,
  StyledComponentInnerOtherProps as styledStyledComponentInnerOtherProps,
  PickU as styledPickU,
  SimpleInterpolation as styledSimpleInterpolation,
  StyleSheetManagerProps as styledStyleSheetManagerProps,
  StyledComponent as styledStyledComponent,
  StyledComponentBase as styledStyledComponentBase,
  StyledComponentInnerAttrs as styledStyledComponentInnerAttrs,
  StyledComponentInnerComponent as styledStyledComponentInnerComponent,
  StyledComponentProps as styledStyledComponentProps,
  StyledComponentPropsWithRef as styledStyledComponentPropsWithRef,
  StyledConfig as styledStyledConfig,
  StyledFunction as styledStyledFunction,
  StyledInterface as styledStyledInterface,
  StyledProps as styledStyledProps,
  StylisPlugin as styledStylisPlugin,
  ThemeProps as styledThemeProps,
  ThemeProviderComponent as styledThemeProviderComponent,
  ThemeProviderProps as styledThemeProviderProps,
  ThemedBaseStyledInterface as styledThemedBaseStyledInterface,
  ThemedCssFunction as styledThemedCssFunction,
  ThemedGlobalStyledClassProps as styledThemedGlobalStyledClassProps,
  ThemedStyledComponentsModule as styledThemedStyledComponentsModule,
  ThemedStyledFunction as styledThemedStyledFunction,
  ThemedStyledFunctionBase as styledThemedStyledFunctionBase,
  ThemedStyledInterface as styledThemedStyledInterface,
  ThemedStyledProps as styledThemedStyledProps,
  WithThemeFnInterface as styledWithThemeFnInterface,
} from 'styled-components';

export let withTheme = styledwithTheme;
export type AnyStyledComponent = styledAnyStyledComponent;
export type BaseThemeProviderComponent<T extends object> =
  styledBaseThemeProviderComponent<T>;
export type BaseThemedCssFunction<T extends object> =
  styledBaseThemedCssFunction<T>;
export type BaseWithThemeFnInterface<T extends object> =
  styledBaseWithThemeFnInterface<T>;
export type CSSKeyframes = styledCSSKeyframes;
export type CSSObject = styledCSSObject;
export type CSSProp = styledCSSProp;
export type CSSProperties = styledCSSProperties;
export type CSSPseudos = styledCSSPseudos;
export type DefaultTheme = styledDefaultTheme;
export type FalseyValue = styledFalseyValue;
export type FlattenInterpolation<T extends object> =
  styledFlattenInterpolation<T>;
export type FlattenSimpleInterpolation = styledFlattenSimpleInterpolation;
export type GlobalStyleComponent<
  T extends object,
  R
> = styledGlobalStyleComponent<T, R>;
export type Interpolation<T extends object> = styledInterpolation<T>;
export type InterpolationFunction<T extends object> =
  styledInterpolationFunction<T>;
export type InterpolationValue = styledInterpolationValue;
export type IntrinsicElementsKeys = styledIntrinsicElementsKeys;
export type Keyframes = styledKeyframes;
export type OmitU<T, K extends keyof T> = styledOmitU<T, K>;
export type StyledComponentInnerOtherProps<T extends AnyStyledComponent> =
  styledStyledComponentInnerOtherProps<T>;
export type PickU<T, K extends keyof T> = styledPickU<T, K>;
export type SimpleInterpolation = styledSimpleInterpolation;
export type StyleSheetManagerProps = styledStyleSheetManagerProps;
export type StyledComponent<
  C extends FunctionComponent,
  T extends object,
  O extends object,
  A extends string | number | symbol
> = styledStyledComponent<C, T, O, A>;
export type StyledComponentBase<
  C extends FunctionComponent,
  T extends object,
  O extends object,
  A extends string | number | symbol
> = styledStyledComponentBase<C, T, O, A>;
export type StyledComponentInnerAttrs<C extends AnyStyledComponent> =
  styledStyledComponentInnerAttrs<C>;
export type StyledComponentInnerComponent<T extends FunctionComponent> =
  styledStyledComponentInnerComponent<T>;
export type StyledComponentProps<
  C extends FunctionComponent,
  T extends object,
  O extends object,
  A extends string | number | symbol
> = styledStyledComponentProps<C, T, O, A>;
export type StyledComponentPropsWithRef<T extends FunctionComponent> =
  styledStyledComponentPropsWithRef<T>;
export type StyledConfig = styledStyledConfig;
export type StyledFunction<T extends FunctionComponent> =
  styledStyledFunction<T>;
export type StyledInterface = styledStyledInterface;
export type StyledProps<T> = styledStyledProps<T>;
export type StylisPlugin = styledStylisPlugin;
export type ThemeProps<T> = styledThemeProps<T>;
export type ThemeProviderComponent<T extends object> =
  styledThemeProviderComponent<T>;
export type ThemeProviderProps<T extends object> = styledThemeProviderProps<T>;
export type ThemedBaseStyledInterface<T extends object> =
  styledThemedBaseStyledInterface<T>;
export type ThemedCssFunction<T extends object> = styledThemedCssFunction<T>;
export type ThemedGlobalStyledClassProps<P, T> =
  styledThemedGlobalStyledClassProps<P, T>;
export type ThemedStyledComponentsModule<
  T extends object,
  U extends object
> = styledThemedStyledComponentsModule<T, U>;
export type ThemedStyledFunction<
  C extends FunctionComponent,
  T extends object,
  O extends object,
  A extends string | number | symbol
> = styledThemedStyledFunction<C, T, O, A>;
export type ThemedStyledFunctionBase<
  C extends FunctionComponent,
  T extends object,
  O extends object,
  A extends string | number | symbol
> = styledThemedStyledFunctionBase<C, T, O, A>;
export type ThemedStyledInterface<T extends object> =
  styledThemedStyledInterface<T>;
export type ThemedStyledProps<P, T> = styledThemedStyledProps<P, T>;
export type WithThemeFnInterface<T extends object> =
  styledWithThemeFnInterface<T>;

let {
  // switch,
  // var,
} = def;

export let createGlobalStyle = styled.createGlobalStyle;
export let css = styled.css;
export let isStyledComponent = styled.isStyledComponent;
export let keyframes = styled.keyframes;
export let useTheme = styled.useTheme;
export let ServerStyleSheet = styled.ServerStyleSheet;
export let StyleSheetManager = styled.StyleSheetManager;
export let ThemeConsumer = styled.ThemeConsumer;
export let ThemeContext = styled.ThemeContext;
export let ThemeProvider = styled.ThemeProvider;

export default styled;

export let a = def.a;
export let abbr = def.abbr;
export let address = def.address;
export let animate = def.animate;
export let animateMotion = def.animateMotion;
export let animateTransform = def.animateTransform;
export let area = def.area;
export let article = def.article;
export let aside = def.aside;
export let audio = def.audio;
export let b = def.b;
export let base = def.base;
export let bdi = def.bdi;
export let bdo = def.bdo;
export let big = def.big;
export let blockquote = def.blockquote;
export let body = def.body;
export let br = def.br;
export let button = def.button;
export let canvas = def.canvas;
export let caption = def.caption;
export let circle = def.circle;
export let cite = def.cite;
export let clipPath = def.clipPath;
export let code = def.code;
export let col = def.col;
export let colgroup = def.colgroup;
export let data = def.data;
export let datalist = def.datalist;
export let dd = def.dd;
export let defs = def.defs;
export let del = def.del;
export let desc = def.desc;
export let details = def.details;
export let dfn = def.dfn;
export let dialog = def.dialog;
export let div = def.div;
export let dl = def.dl;
export let dt = def.dt;
export let ellipse = def.ellipse;
export let em = def.em;
export let embed = def.embed;
export let feBlend = def.feBlend;
export let feColorMatrix = def.feColorMatrix;
export let feComponentTransfer = def.feComponentTransfer;
export let feComposite = def.feComposite;
export let feConvolveMatrix = def.feConvolveMatrix;
export let feDiffuseLighting = def.feDiffuseLighting;
export let feDisplacementMap = def.feDisplacementMap;
export let feDistantLight = def.feDistantLight;
export let feDropShadow = def.feDropShadow;
export let feFlood = def.feFlood;
export let feFuncA = def.feFuncA;
export let feFuncB = def.feFuncB;
export let feFuncG = def.feFuncG;
export let feFuncR = def.feFuncR;
export let feGaussianBlur = def.feGaussianBlur;
export let feImage = def.feImage;
export let feMerge = def.feMerge;
export let feMergeNode = def.feMergeNode;
export let feMorphology = def.feMorphology;
export let feOffset = def.feOffset;
export let fePointLight = def.fePointLight;
export let feSpecularLighting = def.feSpecularLighting;
export let feSpotLight = def.feSpotLight;
export let feTile = def.feTile;
export let feTurbulence = def.feTurbulence;
export let fieldset = def.fieldset;
export let figcaption = def.figcaption;
export let figure = def.figure;
export let filter = def.filter;
export let footer = def.footer;
export let foreignObject = def.foreignObject;
export let form = def.form;
export let g = def.g;
export let h1 = def.h1;
export let h2 = def.h2;
export let h3 = def.h3;
export let h4 = def.h4;
export let h5 = def.h5;
export let h6 = def.h6;
export let head = def.head;
export let header = def.header;
export let hgroup = def.hgroup;
export let hr = def.hr;
export let html = def.html;
export let i = def.i;
export let iframe = def.iframe;
export let image = def.image;
export let img = def.img;
export let input = def.input;
export let ins = def.ins;
export let kbd = def.kbd;
export let keygen = def.keygen;
export let label = def.label;
export let legend = def.legend;
export let li = def.li;
export let line = def.line;
export let linearGradient = def.linearGradient;
export let link = def.link;
export let main = def.main;
export let map = def.map;
export let mark = def.mark;
export let marker = def.marker;
export let mask = def.mask;
export let menu = def.menu;
export let menuitem = def.menuitem;
export let meta = def.meta;
export let metadata = def.metadata;
export let meter = def.meter;
export let mpath = def.mpath;
export let nav = def.nav;
export let noindex = def.noindex;
export let noscript = def.noscript;
export let object = def.object;
export let ol = def.ol;
export let optgroup = def.optgroup;
export let option = def.option;
export let output = def.output;
export let p = def.p;
export let param = def.param;
export let path = def.path;
export let pattern = def.pattern;
export let picture = def.picture;
export let polygon = def.polygon;
export let polyline = def.polyline;
export let pre = def.pre;
export let progress = def.progress;
export let q = def.q;
export let radialGradient = def.radialGradient;
export let rect = def.rect;
export let rp = def.rp;
export let rt = def.rt;
export let ruby = def.ruby;
export let s = def.s;
export let samp = def.samp;
export let script = def.script;
export let section = def.section;
export let select = def.select;
export let slot = def.slot;
export let small = def.small;
export let source = def.source;
export let span = def.span;
export let stop = def.stop;
export let strong = def.strong;
export let style = def.style;
export let sub = def.sub;
export let summary = def.summary;
export let sup = def.sup;
export let svg = def.svg;
export let symbol = def.symbol;
export let table = def.table;
export let tbody = def.tbody;
export let td = def.td;
export let template = def.template;
export let text = def.text;
export let textPath = def.textPath;
export let textarea = def.textarea;
export let tfoot = def.tfoot;
export let th = def.th;
export let thead = def.thead;
export let time = def.time;
export let title = def.title;
export let tr = def.tr;
export let track = def.track;
export let tspan = def.tspan;
export let u = def.u;
export let ul = def.ul;
export let use = def.use;
export let video = def.video;
export let view = def.view;
export let wbr = def.wbr;
export let webview = def.webview;
