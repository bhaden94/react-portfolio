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
					name: "JavaScript",
					icon: tech.javascript,
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
					name: "Spring",
					icon: tech.spring,
				},
				{
					name: "NodeJS",
					icon: tech.node,
				},
				{
					name: "MongoDB",
					icon: tech.mongodb,
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
			title: "Workflow",
			tech: [
				{
					name: "GitLab",
					icon: tech.gitlab,
				},
				{
					name: "GitHub",
					icon: tech.github,
				},
				{
					name: "Git",
					icon: tech.git,
				},
				{
					name: "Jira",
					icon: tech.jira,
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
					name: "SonarQube",
					icon: tech.sonarqube,
				},
				{
					name: "Grafana",
					icon: tech.grafana,
				},
				{
					name: "Heroku",
					icon: tech.heroku,
				},
			],
		},
	];
}
