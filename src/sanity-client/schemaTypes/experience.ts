import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageReference } from ".";
import { ITechnology } from "./technology";

export interface ExperienceSchema {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null; // null == present job
  bullets: string[];
  media: ImageReference;
  description?: string;
  techUsed?: ITechnology[];
}

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    // Leave present company null
    // Sorting in descending order, null will appear first
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "bullets",
      type: "array",
      title: "Bullet Points",
      of: [
        defineArrayMember({
          title: "Bullet Point",
          type: "string",
          name: "bulletPoint",
        }),
      ],
    }),
    defineField({
      name: "media",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "description",
      title: "Description",
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
  ],
});
