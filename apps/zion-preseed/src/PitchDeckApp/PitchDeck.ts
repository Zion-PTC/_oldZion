namespace PitchDeck {
  namespace Interfaces {}
  namespace ChartStuff {
    type RgbaString = string;
    export interface Dataset {
      label: string;
      data: number[];
      backgroundColor: RgbaString[];
      borderColor: RgbaString[];
      borderWidth: number;
    }

    export interface Data {
      labels: string[];
      datasets: Dataset;
    }

    export interface Labels {
      color: RgbaString;
    }

    export interface Legend {
      display: boolean;
      labels: Labels;
    }

    export interface Title {
      display: boolean;
    }

    export interface Plugins {
      title: Title;
      legend: Legend;
    }

    export interface Options {
      responsive: boolean;
      maintainAspectRatio: boolean;
      plugins: Plugins;
    }
  }

  interface Size {
    width: number;
    height: number;
  }

  interface YouTubeFrameResponsiveValues {
    mobile: Size;
    portrait: Size;
    desktop: Size;
  }

  type DynType =
    | 'paragrafo'
    | 'cerchio'
    | 'gridDiv'
    | 'ul'
    | 'filter'
    | 'productPage'
    | 'productPage'
    | 'div'
    | '';
  type Css = 'grid-area' | 'background-color';
  interface YouTube {
    url: URL;
    youTubeFrameResponsiveValues: YouTubeFrameResponsiveValues;
  }
  interface IDynamic {
    dynamic: Css;
    tipo: DynType;
  }
  interface Div {
    id: string; // opzionale
    dynamic: IDynamic; // opzionale
  }
  interface Page {
    id: string;
    dynamic: IDynamic;
  }
  interface Overflow {
    id: string;
    dynamic: IDynamic;
  }
  interface Li {
    dynamic: IDynamic;
    pars: string[];
  }
  interface ResponsiveGrid {
    id: string;
    dynamic: IDynamic;
  }
  interface Titolo {
    tipo: number;
    children: string;
    div: Div;
    sottotitolo: string;
  }
  type SfumatureDiBlu = 'DARK' | 'MIDDARK' | 'MID' | 'MIDGRIGHT' | 'BRIGHT';
  interface Testo {
    tipo: number;
    testoColore?: SfumatureDiBlu;
    gridArea?: string;
    par1?: string;
    list?: string[];
    par2?: string;
    youTube?: YouTube;
  }
  interface Cornice {
    id: string;
    backgroundColor: SfumatureDiBlu;
    gridArea: string;
  }
  interface Img {
    src: string;
    alt: string;
    dynamic?: IDynamic; // opzionale
  }
  interface Background {
    overFlowArea: Overflow;
    // filter = new Dynamic('filter');
    filter: IDynamic;
    img: Img;
  }
  interface Icona {
    // gridDiv = new Dynamic('gridDiv');
    gridDiv: IDynamic;
    // cerchio = new Dynamic('cerchio');
    cerchio: IDynamic;
    // p = new Dynamic('paragrafo');
    p: IDynamic;
  }
  type Path = string;
  interface IconaDetails {
    icona: Path;
    dynamic: IDynamic;
    testo: string;
  }
  interface IconeCarosello {
    titolo: string;
    icona: Icona;
    responsiveGrid: ResponsiveGrid;
    icone: IconaDetails[];
    testi?: string[];
  }
  interface Chart {
    div?: Div;
    data: ChartStuff.Data;
    options: ChartStuff.Options;
  }
  interface Link {
    title: string;
    url: string;
  }
  type WrapperType = 'product' | 'business' | 'normal';
  interface IWrapper {
    id: number;
    type: WrapperType;
    tipo?: number;
    dynamic?: Css;
  }
  /////////////////
  /////////////////
  interface ISuperBasic {
    id: number;
    slug: string;
    page: Page;
    titolo: Titolo;
  }
  interface IBasic extends ISuperBasic {
    wrapper: IWrapper;
  }
  interface IConCarosello extends IBasic {
    iconeCarosello: IconeCarosello;
  }
  interface IIntro extends IBasic {
    testo: Testo;
    youTube: YouTube;
  }
  interface ICover extends IBasic {
    cornice: Cornice;
    img: Img;
    background: Background;
  }
  interface IProblem extends IBasic {
    ul: IDynamic;
    li: Li;
    background: Background;
  }
  interface ISolution extends IBasic {
    id: number;
    slug: string;
  }
  interface IMission {
    page: Page;
    titolo: Titolo;
    iconeCarosello: IconeCarosello;
  }
  interface IProduct {
    tipo: number;
    productPage: IDynamic;
    productWrapper: IWrapper;
    titolo: Titolo;
    testo: Testo;
    background: Background;
    children: string;
    list: (string | any[])[];
  }
  interface IBusinessModel extends ISuperBasic {
    businessWrapper: IWrapper;
    chart: Chart;
    background: Background;
  }
  interface ITokenomics extends ISuperBasic {
    chart1: Chart;
    chart2: Chart;
    div: Div;
  }
  /////////////////
  /////////////////
  class SuperBasic implements ISuperBasic {
    id: number;
    slug: string;
    page: Page;
    titolo: Titolo;
  }
  class Basic extends SuperBasic implements IBasic {
    wrapper: IWrapper;
  }
  class ConCarosello extends Basic implements IConCarosello {
    iconeCarosello: IconeCarosello;
  }
  class Intro extends Basic implements IIntro {
    testo: Testo;
    youTube: YouTube;
  }
  class Cover extends Basic implements ICover {
    cornice: Cornice;
    img: Img;
    background: Background;
  }
  class Problem extends Basic implements IProblem {
    ul: IDynamic;
    li: Li;
    background: Background;
  }
  class Solution extends Basic implements ISolution {
    iconeCarosello: IConCarosello;
    background: Background;
  }
  class Mission extends SuperBasic implements IMission {
    iconeCarosello: IconeCarosello;
  }
  class Product implements IProduct {
    //_____
    tipo: number;
    //
    productPage: IDynamic;
    //
    productWrapper: IWrapper;
    // productWrapper = new ProducWrapper();
    titolo: Titolo;
    //
    testo: Testo;
    background: Background;
    children: string; // opzionale
    list = ['', []]; // opzionale
  }
  class BusinessModel extends SuperBasic implements IBusinessModel {
    businessWrapper: IWrapper;
    // businessWrapper = new BusinessWrapper();
    //
    chart: Chart;
    background: Background;
  }
  class Tokenomics extends SuperBasic implements ITokenomics {
    //
    chart1: Chart;
    chart2: Chart;
    div: Div;
  }
  class Links {
    ul1: Link[] = [];
    ul2: Link[] = [];
  }
  /////////////////
  /////////////////
  abstract class Section {
    tipo?: number;
    id?: string;
    slug?: string;
    page: Page;
    titolo: Titolo;
    background?: Background;
    // constructor(wrapper?: string) {
    //   Section.#createPropert(wrapper);
    // }
    // static #createPropert(name: string): Wrapper {
    //   return (this.prototype[name] = new Wrapper('product'));
    // }
  }

  type SubClassCaroselloTypes = 'solution' | 'mission';
  abstract class SubClassCarosello extends Section {
    iconeCarosello: IconeCarosello;
  }
}
