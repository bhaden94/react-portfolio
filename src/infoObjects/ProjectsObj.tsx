import { SkillsObj, SkillsObject } from "./SkillsObj";
import spacex from "../images/projects/spacex-app.png";
import covid from "../images/projects/covid-app.png";

export interface ProjectObj {
	id: number;
	media: string;
	title: string;
	shortDesc: string; // max 125 characters long, everything else will be cutoff in card
	longDesc: string;
	liveLink: string;
	codeLink: string;
	techUsed: any[];
}

export function ProjectObject(): ProjectObj[] {
	const skills: SkillsObj = SkillsObject(35);

	// make sure projects are in the order you want them displayed
	return [
		{
			id: 0,
			media: covid,
			title: "Covid-19 Tracker V2",
			shortDesc: "Visualize global key data related to Covid-19 virus.",
			longDesc: "long desc",
			liveLink: "https://covid-19-tracker-v2-fe.vercel.app/",
			codeLink: "https://github.com/bhaden94/Covid-19-Tracker-V2",
			techUsed: [skills.docker, skills.spring],
		},
		{
			id: 1,
			media: spacex,
			title: "SpaceX Timeline",
			shortDesc: "short desc",
			longDesc: "long desc",
			liveLink: "https://bhaden94.github.io/spacex-app/",
			codeLink: "https://github.com/bhaden94/spacex-app",
			techUsed: [
				skills.react,
				skills.github,
				skills.docker,
				skills.spring,
			],
		},
	];
}
