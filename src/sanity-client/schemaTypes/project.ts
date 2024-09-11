import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageReference } from ".";
import { ITechnology } from "./technology";

export interface ProjectSchema {
  isShown: boolean;
  media: ImageReference;
  title: string;
  shortDesc: string; // max 125 characters long, everything else will be cutoff in card
  accomplishments: string[]; // This can be as many bullets as you want, but will show a scroll bar if necesary
  liveLink?: string;
  codeLink?: string;
  techUsed?: ITechnology[]; // max 9 techologies here for proper display on card
  priority?: number;
}

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "isShown",
      title: "Is Shown",
      type: "boolean",
    }),
    defineField({
      name: "media",
      title: "Media",
      type: "image",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "accomplishments",
      title: "Accomplishments",
      type: "array",
      of: [
        defineArrayMember({
          name: "accomplishment",
          title: "Accomplishment",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "string",
    }),
    defineField({
      name: "codeLink",
      title: "Code Link",
      type: "string",
    }),
    defineField({
      name: "techUsed",
      type: "array",
      title: "Tech Used",
      of: [
        defineArrayMember({
          title: "Technology",
          type: "technology",
          name: "tech",
        }),
      ],
    }),
    // add validation to make required and between 1 and 99
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
    }),
  ],
});
