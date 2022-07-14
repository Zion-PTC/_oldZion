type Palette5Colors = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
};
type Palette8Colors = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
};

type ColorPaletteTypes = "hex";

export interface ColorPalette {
  __type: ColorPaletteTypes;
  colors: Palette5Colors | Palette8Colors;
}

export class ColorPalette {
  constructor(
    type: ColorPaletteTypes,
    colors: Palette5Colors | Palette8Colors
  ) {
    this.__type = type;
    this.colors = colors;
  }
}
