function esempio1() {
  class DynamicFactory {
    creaDynamic(tipo: string) {}
    constructor() {
      this.creaDynamic = function (tipo: string) {
        var dynamic;
        switch (tipo) {
          case 'paragrafo':
            dynamic = new Paragrafo();
            break;
          case 'gridArea':
            dynamic = new GridArea();
            break;
          default:
            break;
        }
        //@ts-expect-error
        dynamic.tipo = tipo;
        //@ts-expect-error
        dynamic.method = function () {
          return 'we are here';
        };
        return dynamic;
      };
    }
  }
  class Base {
    dynamic;
    constructor() {
      this.dynamic = `css`;
    }
  }
  class Paragrafo extends Base {
    constructor() {
      super();
    }
  }
  class GridArea extends Base {}
}
