import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageReference } from ".";

// TODO: Add validations

export interface StrengthSchema {
  short: string;
  long: string;
  image: ImageReference;
}

export interface AboutSchema {
  name: string;
  title: string;
  landingOpener: string[];
  landingOpenerColorOverride?: string;
  staticBackground: ImageReference;
  landingDesktopImage: ImageReference;
  landingMobileImage: ImageReference;
  featuredLink: string;
  headline: string;
  strengths: StrengthSchema[];
}

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "landingOpener",
      title: "Landing Opener",
      type: "array",
      of: [
        {
          name: "line",
          title: "Line",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "staticBackground",
      title: "Static Background",
      type: "image",
    }),
    defineField({
      name: "landingDesktopImage",
      title: "Landing Desktop Image",
      type: "image",
    }),
    defineField({
      name: "landingMobileImage",
      title: "Landing Mobile Image",
      type: "image",
    }),
    defineField({
      name: "featuredLink",
      title: "Featured Link",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "strengths",
      title: "Strengths",
      type: "array",
      of: [
        defineArrayMember({
          name: "strength",
          title: "Strength",
          type: "object",
          fields: [
            {
              name: "short",
              title: "Short",
              type: "string",
            },
            {
              name: "long",
              title: "Long",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        }),
      ],
    }),
  ],
});
