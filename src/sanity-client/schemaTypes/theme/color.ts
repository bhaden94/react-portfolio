import { defineType } from "sanity";

type TColorHex = `#${string}`;
type TColorRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type TColor = TColorHex | TColorRGBA;

export default defineType({
  name: "color",
  title: "Color",
  type: "string",
  validation: (Rule) =>
    Rule.custom((color: string | unknown) => {
      if (!color) return "Color must be given.";
      if (typeof color !== "string") return "Color must be a string.";

      // Hex color regex (matches #RRGGBB or #RGB)
      const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
      // RGBA color regex (matches rgba(r, g, b, a))
      const rgbaColorRegex =
        /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/;

      if (hexColorRegex.test(color) || rgbaColorRegex.test(color)) return true;
      return "Color must be a valid hex code (e.g., #RRGGBB) or RGBA color (e.g., rgba(255, 0, 0, 1))";
    }),
});
