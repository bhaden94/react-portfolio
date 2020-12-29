import { SkillsObj, SkillsObject } from "./SkillsObj";
import spacex from "../images/projects/spacex-app.png";
import covid from "../images/projects/covid-app.png";

export interface ProjectObj {
	id: number;
	media: string;
	title: string;
	shortDesc: string; // max 125 characters long, everything else will be cutoff in card
	accomplishments: string[]; // This can be as many bullets as you want, but will show a scroll bar if necesary
	liveLink: string;
	codeLink: string;
	techUsed: any[]; // max 9 techologies here for proper display on card
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
			accomplishments: [
				"Java Multi-threaded services for DB population & updating",
				"CI/CD pipeline with GitHub Actions for static code analysis",
				"Algorithms to shape data on FE and BE",
			],
			liveLink: "https://covid-19-tracker-v2-fe.vercel.app/",
			codeLink: "https://github.com/bhaden94/Covid-19-Tracker-V2",
			techUsed: [
				skills.spring,
				skills.java,
				skills.react,
				skills.typescript,
				skills.materialui,
				skills.mongodb,
				skills.heroku,
			],
		},
		{
			id: 1,
			media: spacex,
			title: "SpaceX Timeline",
			shortDesc:
				"See milestones, past launches, and the next launch for SpaceX.",
			accomplishments: [
				"React & Bootstrap to visualize data about SpaceX launches",
				"Custom responsive sidebar component",
			],
			liveLink: "https://bhaden94.github.io/spacex-app/",
			codeLink: "https://github.com/bhaden94/spacex-app",
			techUsed: [
				skills.react,
				skills.javascript,
				skills.bootstrap,
				skills.github,
			],
		},
	];
}
