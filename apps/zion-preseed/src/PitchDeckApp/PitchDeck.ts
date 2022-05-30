import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';

export namespace PitchDeck {
  export namespace ChartStuff {
    type RgbaString = string;
    type TLabels = {
      color: RgbaString;
    };
    export class Labels implements TLabels {
      constructor(public color: string) {}
    }

    type TLegend = {
      display: boolean;
      labels: TLabels;
    };
    export class Legend implements TLegend {
      constructor(public display: boolean, public labels: TLabels) {}
    }

    type TTitle = {
      display: boolean;
    };
    export class Title implements TTitle {
      constructor(public display: boolean) {}
    }

    type TPlugins = {
      title: Title;
      legend: TLegend;
    };
    export class Plugins implements TPlugins {
      constructor(public title: TTitle, public legend: TLegend) {}
    }

    type TOptions = {
      responsive: boolean;
      maintainAspectRatio: boolean;
      plugins: TPlugins;
    };

    export class Options implements TOptions {
      constructor(
        public responsive: boolean,
        public maintainAspectRatio: boolean,
        public plugins: TPlugins
      ) {}
    }

    type TDataset = {
      label: string;
      data: number[];
      backgroundColor: RgbaString[];
      borderColor: RgbaString[];
      borderWidth: number;
    };
    export class Dataset implements TDataset {
      constructor(
        public label: string,
        public data: number[],
        public backgroundColor: RgbaString[],
        public borderColor: RgbaString[],
        public borderWidth: number
      ) {}
    }

    type TData = {
      labels: string[];
      datasets: TDataset[];
    };
    export class Data implements TData {
      constructor(public labels: string[], public datasets: TDataset[]) {}
    }

    type Chart_T = {
      div?: Div;
      data: TData;
      options: TOptions;
    };
    export class Chart implements Chart_T {
      constructor(
        public data: TData,
        public options: TOptions,
        public div?: Div
      ) {}
    }
  }

  type Size = {
    width: number;
    height: number;
  };

  type YouTubeFrameResponsiveValues = {
    mobile: Size;
    portrait: Size;
    desktop: Size;
  };

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
  type IDynamic = {
    dynamic: FlattenSimpleInterpolation;
    tipo: DynType;
  };

  type Li = {
    dynamic: IDynamic;
    pars: string[];
  };
  type ResponsiveGrid = {
    id: string;
    dynamic: IDynamic;
  };

  type SfumatureDiBlu = 'DARK' | 'MIDDARK' | 'MID' | 'MIDGRIGHT' | 'BRIGHT';
  type Icona = {
    // gridDiv = new Dynamic('gridDiv');
    gridDiv: IDynamic;
    // cerchio = new Dynamic('cerchio');
    cerchio: IDynamic;
    // p = new Dynamic('paragrafo');
    p: IDynamic;
  };
  type Path = string;
  type IconaDetails = {
    icona: Path;
    dynamic: IDynamic;
    testo: string;
  };
  type IconeCarosello = {
    titolo: string;
    icona: Icona;
    responsiveGrid: ResponsiveGrid;
    icone: IconaDetails[];
    testi?: string[];
  };
  type Link = {
    title: string;
    url: string;
  };

  type IYouTube = {
    url: string;
    youTubeFrameResponsiveValues: YouTubeFrameResponsiveValues;
  };
  export class YouTube implements IYouTube {
    constructor(
      public url: string,
      public youTubeFrameResponsiveValues: YouTubeFrameResponsiveValues
    ) {}
  }

  type TCornice = {
    id: string;
    backgroundColor: string;
    gridArea: string;
  };
  export class Cornice implements TCornice {
    constructor(
      public id: string,
      public backgroundColor: string,
      public gridArea: string
    ) {}
  }

  type TTesto = {
    tipo: number;
    testoColore?: string;
    gridArea?: string;
    par1?: string;
    list?: (string | (string | string[])[])[];
    par2?: string;
    youTube?: YouTube;
  };
  export class Testo implements TTesto {
    constructor(
      public tipo: number,
      public color?: string,
      public testoColore?: string,
      public gridArea?: string,
      public par1?: string,
      public list?: (string | (string | string[])[])[],
      public par2?: string,
      public youTube?: YouTube
    ) {}
  }

  type TImg = {
    src: string;
    alt: string;
    id?: string;
    dynamic?: FlattenSimpleInterpolation;
  };
  export class Img implements TImg {
    constructor(
      public src: string,
      public alt: string,
      public id?: string,
      public dynamic?: FlattenSimpleInterpolation
    ) {}
  }

  type TFilter = {
    id?: string;
    dynamic?: FlattenSimpleInterpolation;
    backgroundColor?: string;
  };
  export class Filter implements TFilter {
    constructor(
      public id?: string,
      public dynamic?: FlattenSimpleInterpolation,
      public backgroundColor?: string
    ) {}
  }

  type TBackground = {
    overFlowArea: Overflow;
    filter: Filter;
    img: Img;
  };
  export class Background implements TBackground {
    constructor(
      public overFlowArea: Overflow,
      public filter: Filter,
      public img: Img
    ) {}
  }

  type Div_T = {
    id?: string;
    dynamic?: FlattenSimpleInterpolation;
  };
  export class Div implements Div_T {
    constructor(
      public id?: string,
      public dynamic?: FlattenSimpleInterpolation
    ) {}
  }

  type TOverflow = {
    id: string;
    dynamic: FlattenSimpleInterpolation;
  };
  export class Overflow implements TOverflow {
    constructor(
      public id: string,
      public dynamic: FlattenSimpleInterpolation
    ) {}
  }

  type Titolo_T = {
    tipo: number;
    children: string;
    div: Div;
    sottoTitolo?: string;
  };
  export class Titolo implements Titolo_T {
    constructor(
      public tipo: number,
      public children: string,
      public div: Div,
      public sottoTitolo: string = 'sub-title'
    ) {}
  }

  type WrapperType = 'product' | 'business' | 'normal';
  type TWrapper = {
    id: string;
    type?: WrapperType;
    tipo?: number;
    dynamic?: Css;
  };
  export class Wrapper implements TWrapper {
    constructor(
      public id: string,
      public type?: WrapperType,
      public tipo?: number,
      public dynamic?: Css
    ) {}
  }

  type TPage = {
    id: string;
    dynamic: FlattenSimpleInterpolation;
  };
  export class Page implements TPage {
    constructor(
      public id: string,
      public dynamic: FlattenSimpleInterpolation
    ) {}
  }
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /// INTERFACES
  /////////////////
  interface ISuperBasic {
    id: number;
    page: Page;
    slug: string;
    titolo: Titolo;
  }
  interface IBasic extends ISuperBasic {
    wrapper: Wrapper;
  }
  // interface IConCarosello extends IBasic {
  //   iconeCarosello: IconeCarosello;
  // }
  interface IIntro extends IBasic {
    testo: TTesto;
    youTube: YouTube;
  }
  export class Intro implements IIntro {
    constructor(
      public id: number,
      public page: Page,
      public slug: string,
      public titolo: Titolo,
      public wrapper: Wrapper,
      public testo: TTesto,
      public youTube: YouTube
    ) {}
  }

  interface ICover extends IBasic {
    cornice: Cornice;
    img: TImg;
    background: Background;
  }
  export class Cover implements ICover {
    constructor(
      public id: number,
      public page: Page,
      public slug: string,
      public titolo: Titolo,
      public wrapper: Wrapper,
      public cornice: Cornice,
      public img: TImg,
      public background: Background
    ) {}
  }
  // interface IProblem extends IBasic {
  //   ul: IDynamic;
  //   li: Li;
  //   background: Background;
  // }
  // interface ISolution extends IBasic {
  //   id: number;
  //   slug: string;
  // }
  // interface IMission {
  //   page: Page;
  //   titolo: Titolo;
  //   iconeCarosello: IconeCarosello;
  // }
  interface IProduct {
    tipo: number;
    productWrapper: Wrapper;
    background: Background;
    children?: string;
    titolo?: Titolo;
    productPage?: FlattenSimpleInterpolation;
    testo?: Testo;
    list?: (string | any[])[];
  }
  export class ProductDatas implements IProduct {
    constructor(
      public tipo: number,
      public productWrapper: Wrapper,
      public background: Background,
      public children?: string,
      public titolo?: Titolo,
      public productPage?: FlattenSimpleInterpolation,
      public testo?: Testo,
      public list?: (string | any[])[]
    ) {}
  }

  interface IBusinessModel extends ISuperBasic {
    businessWrapper: TWrapper;
    chart: ChartStuff.Chart;
    background: Background;
  }
  export class BusinessModelDatas implements IBusinessModel {
    constructor(
      public id: number,
      public page: Page,
      public slug: string,
      public titolo: Titolo,
      public businessWrapper: Wrapper,
      public chart: ChartStuff.Chart,
      public background: Background
    ) {}
  }

  interface ITokenomics extends ISuperBasic {
    chart1: ChartStuff.Chart;
    chart2: ChartStuff.Chart;
    div: Div;
  }
  export class TokenomicsDatas implements ITokenomics {
    constructor(
      public id: number,
      public page: Page,
      public slug: string,
      public titolo: Titolo,
      public chart1: ChartStuff.Chart,
      public chart2: ChartStuff.Chart,
      public div: Div
    ) {}
  }
}
//   /////////////////
//   /// CLASSES
//   /////////////////
// class SuperBasic implements ISuperBasic {
//   constructor(
//     public id: number,
//     public slug: string,
//     public page: Page,
//     public titolo: Titolo
//   ) {}
// }
// class Basic extends SuperBasic implements IBasic {
//   constructor(
//     public id: number,
//     public slug: string,
//     public page: Page,
//     public titolo: Titolo,
//     public wrapper: Wrapper
//   ) {
//     super(id, slug, page, titolo);
//   }
// }
//   class ConCarosello extends Basic implements IConCarosello {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public wrapper: IWrapper,
//       public iconeCarosello: IconeCarosello
//     ) {
//       super(id, slug, page, titolo, wrapper);
//     }
//   }
//   class Intro extends Basic implements IIntro {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public wrapper: IWrapper,
//       public testo: TTesto,
//       public youTube: YouTube
//     ) {
//       super(id, slug, page, titolo, wrapper);
//     }
//   }
// class Cover extends Basic implements ICover {
//   constructor(
//     public id: number,
//     public slug: string,
//     public page: Page,
//     public titolo: Titolo,
//     public wrapper: IWrapper,
//     public cornice: Cornice,
//     public img: TImg,
//     public background: Background
//   ) {
//     super(id, slug, page, titolo, wrapper);
//   }
// }
//   class Problem extends Basic implements IProblem {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public wrapper: IWrapper,
//       public ul: IDynamic,
//       public li: Li,
//       public background: Background
//     ) {
//       super(id, slug, page, titolo, wrapper);
//     }
//   }
//   class Solution extends Basic implements ISolution {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public wrapper: IWrapper,
//       public iconeCarosello: IConCarosello,
//       public background: Background
//     ) {
//       super(id, slug, page, titolo, wrapper);
//     }
//   }
//   class Mission extends SuperBasic implements IMission {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public iconeCarosello: IconeCarosello
//     ) {
//       super(id, slug, page, titolo);
//     }
//   }
//   class Product implements IProduct {
//     constructor(
//       //_____
//       public tipo: number,
//       public productPage: IDynamic,
//       public productWrapper: IWrapper,
//       // public productWrapper = new ProducWrapper(),
//       public titolo: Titolo,
//       //
//       public testo: TTesto,
//       public background: Background,
//       public children: string, // opzionale
//       public list = ['', []] // opzionale){)
//     ) {}
//   }
//   class BusinessModel extends SuperBasic implements IBusinessModel {
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       public businessWrapper: IWrapper,
//       // businessWrapper = new BusinessWrapper();
//       //
//       public chart: Chart,
//       public background: Background
//     ) {
//       super(id, slug, page, titolo);
//     }
//   }
//   class Tokenomics extends SuperBasic implements ITokenomics {
//     //
//     chart1: Chart;
//     chart2: Chart;
//     div: Div;
//     constructor(
//       public id: number,
//       public slug: string,
//       public page: Page,
//       public titolo: Titolo,
//       chart1: Chart,
//       chart2: Chart,
//       div: Div
//     ) {
//       super(id, slug, page, titolo);
//       this.chart1 = chart1;
//       this.chart2 = chart2;
//       this.div = div;
//     }
//   }
//   class Links {
//     ul1: Link[] = [];
//     ul2: Link[] = [];
//   }
//   /////////////////
//   /////////////////
//   abstract class Section {
//     tipo?: number;
//     id?: string;
//     slug?: string;
//     page: Page;
//     titolo: Titolo;
//     background?: Background;
//     constructor(page: Page, titolo: Titolo, background: Background) {
//       (this.page = page), (this.titolo = titolo);
//       this.background = background;
//     }
//     // constructor(wrapper?: string) {
//     //   Section.#createPropert(wrapper);
//     // }
//     // static #createPropert(name: string): Wrapper {
//     //   return (this.prototype[name] = new Wrapper('product'));
//     // }
//   }

//   type SubClassCaroselloTypes = 'solution' | 'mission';
//   abstract class SubClassCarosello extends Section {
//     iconeCarosello: IconeCarosello;
//     constructor(
//       page: Page,
//       titolo: Titolo,
//       background: Background,
//       iconeCarosello: IconeCarosello
//     ) {
//       super(page, titolo, background);
//       this.iconeCarosello = iconeCarosello;
//     }
//   }
// }
