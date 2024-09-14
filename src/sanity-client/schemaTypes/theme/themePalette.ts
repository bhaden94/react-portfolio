import { defineType, defineField } from "sanity";
import { TColor } from "./color";

export interface ThemePaletteSchema {
  primary: TColor;
  secondary: TColor;
  background: {
    paper: TColor;
    default: TColor;
  };
  text: {
    primary: TColor;
    secondary: TColor;
  };
}

export default defineType({
  name: "themePalette",
  title: "Theme Palette",
  type: "object",
  fields: [
    defineField({
      name: "primary",
      title: "Primary",
      type: "color",
    }),
    defineField({
      name: "secondary",
      title: "Secondary",
      type: "color",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "object",
      fields: [
        defineField({
          name: "paper",
          title: "Paper",
          type: "color",
        }),
        defineField({
          name: "default",
          title: "Default",
          type: "color",
        }),
      ],
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "object",
      fields: [
        defineField({
          name: "primary",
          title: "Primary",
          type: "color",
        }),
        defineField({
          name: "secondary",
          title: "Secondary",
          type: "color",
        }),
      ],
    }),
  ],
});
