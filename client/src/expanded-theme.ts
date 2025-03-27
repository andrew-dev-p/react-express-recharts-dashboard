// eslint-disable-next-line
import type { Palette, PaletteColor, TypeBackground } from "@mui/material";

declare module "@mui/material" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface TypeBackground {
    light: string;
    main: string;
  }

  interface Palette {
    tertiary: PaletteColor;
    background: TypeBackground;
  }
}
