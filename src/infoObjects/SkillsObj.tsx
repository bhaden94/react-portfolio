import { TechnologiesObj, TechnologiesObject } from "./TechnologiesObj";

export interface SkillsObj {
	title: string;
	tech: { name: string; icon: TechnologiesObj }[];
}

export function SkillsObject(): SkillsObj[] {
	const tech: TechnologiesObj = TechnologiesObject(75);

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
