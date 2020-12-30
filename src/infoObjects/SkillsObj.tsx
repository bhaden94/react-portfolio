import { TechnologiesObj, TechnologiesObject } from "./TechnologiesObj";

export interface SkillsObj {
	title: string;
	tech: TechnologiesObj[];
}

export function SkillsObject(): SkillsObj[] {
	const tech: TechnologiesObj = TechnologiesObject(75);

	return [
		{
			title: "Frontend",
			tech: [
				tech.react,
				tech.javascript,
				tech.typescript,
				tech.html,
				tech.css,
			],
		},
		{
			title: "Backend",
			tech: [
				tech.java,
				tech.spring,
				tech.node,
				tech.postgresql,
				tech.mongodb,
			],
		},
	];
}
