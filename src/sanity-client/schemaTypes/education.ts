import { defineArrayMember, defineField, defineType } from "sanity";

// TODO: Add validations

export interface EducationSchema {
  degree: string;
  school: string;
  schoolLink?: string;
  dateFinished?: string;
  bullets?: string[];
  priority?: number;
}

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
    }),
    defineField({
      name: "school",
      title: "School",
      type: "string",
    }),
    defineField({
      name: "schoolLink",
      title: "School Link",
      type: "string",
    }),
    defineField({
      name: "dateFinished",
      title: "Date Finished",
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
    // add validation to make required and between 1 and 99
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
    }),
  ],
});
