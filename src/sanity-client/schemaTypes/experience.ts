import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageReference } from ".";
import {
  Amazonaws,
  Angular,
  Bootstrap,
  Csharp,
  CssThree,
  Docker,
  Dotnet,
  Elasticsearch,
  Git,
  Github,
  Gitlab,
  Grafana,
  Heroku,
  Html5,
  Icon,
  Java,
  Javascript,
  Jira,
  Jupyter,
  Kibana,
  Linux,
  Mattermost,
  Microsoftazure,
  Mongodb,
  Mui,
  Mysql,
  Nextdotjs,
  Nginx,
  Nodedotjs,
  Postgresql,
  Powershell,
  Python,
  Rancher,
  ReactJs,
  Sonarqube,
  Spring,
  Typescript,
} from "@icons-pack/react-simple-icons";

export const TechnologiesIconMap: { [key: string]: [Icon, string] } = {
  Docker: [Docker, "#2496ED"],
  Spring: [Spring, "#6DB33F"],
  React: [ReactJs, "#61DBFB"],
  Angular: [Angular, "#DD0031"],
  Node: [Nodedotjs, "#339933"],
  Git: [Git, "#F05032"],
  Github: [Github, "#181717"],
  Gitlab: [Gitlab, "#FCA121"],
  Mysql: [Mysql, "#4479A1"],
  Postgresql: [Postgresql, "#336791"],
  Mongodb: [Mongodb, "#47A248"],
  Java: [Java, "#007396"],
  Javascript: [Javascript, "#F7DF1E"],
  Typescript: [Typescript, "#3178C6"],
  Sonarqube: [Sonarqube, "#4E9BCD"],
  Jira: [Jira, "#0052CC"],
  Grafana: [Grafana, "#F46800"],
  Heroku: [Heroku, "#430098"],
  Bootstrap: [Bootstrap, "#7952B3"],
  Nginx: [Nginx, "#269539"],
  Materialui: [Mui, "#0081CB"],
  Html: [Html5, "#E34F26"],
  Css: [CssThree, "#1572B6"],
  Rancher: [Rancher, "#0075A8"],
  Mattermost: [Mattermost, "#0072C6"],
  Python: [Python, "#3776AB"],
  Aws: [Amazonaws, "#146eb4"],
  Kibana: [Kibana, "#005571"],
  Elasticsearch: [Elasticsearch, "#005571"],
  Azure: [Microsoftazure, "#0089D6"],
  Csharp: [Csharp, "#239120"],
  Jupyter: [Jupyter, "#F37626"],
  Linux: [Linux, "#FCC624"],
  Powershell: [Powershell, "#5391FE"],
  Dotnet: [Dotnet, "#512BD4"],
  Nextjs: [Nextdotjs, "#000000"],
};

export interface ITechnologies {
  icon: string;
  iconSize: number;
}

export interface ExperienceSchema {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null; // null == present job
  bullets: string[];
  media: ImageReference;
  description?: string;
  techUsed?: ITechnologies[];
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
          title: "Tech",
          type: "object",
          name: "tech",
          initialValue: {
            iconSize: 50,
          },
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: Object.keys(TechnologiesIconMap),
              },
            }),
            defineField({
              name: "iconSize",
              title: "Icon Size",
              type: "number",
              options: {
                list: [
                  { title: "small", value: 35 },
                  { title: "medium", value: 50 },
                  { title: "large", value: 75 },
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
