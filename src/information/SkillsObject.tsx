import { ITechnologiesObject, TechnologiesObject } from "./TechnologiesObject";

export interface ISkillsObject {
  title: string;
  tech: { name: string; icon: ITechnologiesObject }[];
}

/*
	This is where you put the skills that will be showcased in the Skills section

	Each object in the array will create a new Skills entry and must have a
	title for the header of that entry

	The tech array will need an object for each technology you add.
	The name is what will appear below the icon and the icon comes from the
	TechologiesObj.tsx file. 
	If there is an icon that is not there go to https://simpleicons.org/
	to find more and import them in TechologiesObj.tsx
*/
export function SkillsObject(): ISkillsObject[] {
  const tech: ITechnologiesObject = TechnologiesObject(75);

  return [
    {
      title: "Frontend",
      tech: [
        {
          name: "React",
          icon: tech.react,
        },
        {
          name: "TypeScript",
          icon: tech.typescript,
        },
        {
          name: "HTML5",
          icon: tech.html,
        },
        {
          name: "CSS3",
          icon: tech.css,
        },
      ],
    },
    {
      title: "Backend",
      tech: [
        {
          name: "Java",
          icon: tech.java,
        },
        {
          name: "C#",
          icon: tech.csharp,
        },
        {
          name: "Python",
          icon: tech.python,
        },
        {
          name: "PostgreSQL",
          icon: tech.postgresql,
        },
        {
          name: "MySQL",
          icon: tech.mysql,
        },
      ],
    },
    {
      title: "Other",
      tech: [
        {
          name: "Docker",
          icon: tech.docker,
        },
        {
          name: "Azure",
          icon: tech.azure,
        },
        {
          name: "Linux",
          icon: tech.linux,
        },
      ],
    },
  ];
}
