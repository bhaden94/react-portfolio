import { defineField, defineType } from "sanity";
import { ThemePaletteSchema } from "./themePalette";

export interface ThemeSchema {
  light: ThemePaletteSchema;
  dark: ThemePaletteSchema;
}

export default defineType({
  name: "theme",
  title: "Theme",
  type: "document",
  fields: [
    defineField({
      name: "light",
      title: "Light Theme",
      type: "themePalette",
    }),
    defineField({
      name: "dark",
      title: "Dark Theme",
      type: "themePalette",
    }),
  ],
});
