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
					name: "Node",
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
	];
}
