import {
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from '@zionrepack/styled-components';
import { FC } from 'react';
import { Page, TPage } from '../Components/Compositori/Page';
import {
  TWrapper,
  Wrapper,
  WrapperTypes,
} from '../Components/Compositori/Wrapper';

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
  // type Css = 'grid-area' | 'background-color';
  // type SfumatureDiBlu = 'DARK' | 'MIDDARK' | 'MID' | 'MIDGRIGHT' | 'BRIGHT';
  // type Link = {
  //   title: string;
  //   url: string;
  // };
  export type Path = string;

  type TDynamic = {
    dynamic: FlattenSimpleInterpolation;
    tipo?: DynType;
  };
  export class Dynamic implements TDynamic {
    constructor(
      public dynamic: FlattenSimpleInterpolation,
      public tipo?: DynType
    ) {}
  }

  type TLi = {
    dynamic: FlattenSimpleInterpolation;
    pars: string[];
  };
  export class Li implements TLi {
    constructor(
      public dynamic: FlattenSimpleInterpolation,
      public pars: string[]
    ) {}
  }

  type TResponsiveGrid = {
    id: string;
    dynamic: FlattenSimpleInterpolation;
  };
  export class ResponsiveGrid implements TResponsiveGrid {
    constructor(
      public id: string,
      public dynamic: FlattenSimpleInterpolation
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

  export type TImg = {
    src: string;
    alt?: string;
    id?: string;
    dynamic?: FlattenSimpleInterpolation;
  };
  export class Img implements TImg {
    constructor(
      public src: string,
      public alt?: string,
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

  type TDiv = {
    id?: string;
    dynamic?: FlattenSimpleInterpolation;
  };
  export class Div implements TDiv {
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

  // TODO portare in tsx
  interface IIcona {
    icona: Path;
    dynamic: FlattenSimpleInterpolation;
    testo: string;
    img?: Img;
  }
  export class Icona implements IIcona {
    constructor(
      public icona: Path,
      public dynamic: FlattenSimpleInterpolation,
      public testo: string,
      public img?: Img
    ) {}
  }

  // TODO portare in tsx
  type TIconaSettings = {
    gridDiv: Dynamic;
    cerchio: Dynamic;
    p: Dynamic;
    img?: Img;
  };
  export class IconaSettings implements TIconaSettings {
    constructor(
      gridInput: FlattenSimpleInterpolation,
      cerchioInput: FlattenSimpleInterpolation,
      pInput: FlattenSimpleInterpolation,
      public gridDiv: Dynamic = { dynamic: gridInput },
      public cerchio: Dynamic = { dynamic: cerchioInput },
      public p: Dynamic = { dynamic: pInput },
      public img?: Img
    ) {}
  }

  // TODO portare in tsx
  type TYouTube = {
    url: string;
    youTubeFrameResponsiveValues: YouTubeFrameResponsiveValues;
  };
  export class YouTube implements TYouTube {
    constructor(
      public url: string,
      public youTubeFrameResponsiveValues: YouTubeFrameResponsiveValues
    ) {}
  }

  // TODO portare in tsx
  export type TTesto = {
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

  // TODO portare in tsx
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

  // TODO portare in tsx
  type TTitolo = {
    tipo: number;
    children: string;
    div: Div;
    sottoTitolo?: string;
  };
  export class TitoloOld implements TTitolo {
    constructor(
      public tipo: number,
      public children: string,
      public div: Div,
      public sottoTitolo?: string
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
  export interface ISuperBasic {
    id: number;
    // page?: Page;
    slug: string;
    prefix: string;
    titolo: TitoloOld | string;
  }
  export class SuperBasic implements ISuperBasic {
    public id: number = 0;
    public prefix: string;
    public slug: string = 'add slug here';
    constructor(public titolo: TitoloOld) {
      this.prefix = this.slug + this.id;
    }
  }

  export interface IPageBase extends ISuperBasic {
    Page: FC<TPage>;
  }
  export class PageBase extends SuperBasic implements IPageBase {
    public Page: FC<TPage>;
    constructor(public titolo: TitoloOld) {
      super(titolo);
      let page = new Page(this.prefix);
      this.Page = page.Page;
    }
  }

  export interface IWrapperBase extends ISuperBasic {
    Wrapper: FC<TWrapper>;
  }
  export class WrapperBase extends SuperBasic implements IWrapperBase {
    public Wrapper: FC<TWrapper>;
    constructor(public wrapperType: WrapperTypes, public titolo: TitoloOld) {
      super(titolo);
      let wrapper = new Wrapper(wrapperType, this.prefix);
      this.Wrapper = wrapper.Wrapper;
    }
  }

  export interface IBasic extends ISuperBasic {
    // wrapper?: Wrapper;
  }
}
