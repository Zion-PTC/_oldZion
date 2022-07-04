"use strict";
function esempio1() {
    class DynamicFactory {
        creaDynamic(tipo) { }
        constructor() {
            this.creaDynamic = function (tipo) {
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
                dynamic.tipo = tipo;
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
    class GridArea extends Base {
    }
}
