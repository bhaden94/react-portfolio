import { defineType, defineField, defineArrayMember } from "sanity";
import { ITechnology } from "./technology";

export interface ITechSkill {
  name: string;
  tech: ITechnology;
}

export interface SkillSchema {
  title: string;
  tech: ITechSkill[];
}

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "tech",
      type: "array",
      title: "Tech Used",
      of: [
        defineArrayMember({
          title: "Tech",
          type: "object",
          name: "tech",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              title: "Technology",
              type: "technology",
              name: "tech",
            }),
          ],
        }),
      ],
    }),
  ],
});
