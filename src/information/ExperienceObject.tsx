import Logo1 from "../images/experience/af-logo.jpg";
import Logo3 from "../images/experience/JD-logo.png";
import Logo2 from "../images/experience/levelup-logo.png";
import Logo4 from "../images/experience/microsoft-logo.jpg";
import {
	ITechnologiesObject, TechnologiesObject
} from "./TechnologiesObject";

export interface IExperienceObject {
	startDate: Date;
	endDate: Date | string;
	title: string;
	company: string;
	bullets: string[];
	media: string;
	description?: string;
	techUsed?: ITechnologiesObject[];
}

/*
    This is where you will put in your past experience
    Follow the examples given and put your own past jobs in

    note: put the experience objects in the order they should appear on the page
*/
export function ExperienceObject(): IExperienceObject[] {
	const tech: ITechnologiesObject = TechnologiesObject(35);

	return [
		{
			startDate: new Date(2021, 3, 0),
			endDate: "Present",
			title: "Software Engineer",
			company: "Microsoft",
			bullets: ["To be determined..."],
			media: Logo4,
			techUsed: [tech.azure, tech.postgresql, tech.mysql, tech.csharp],
		},
		{
			startDate: new Date(2021, 1, 0),
			endDate: new Date(2021, 3, 0),
			title: "Cloud Software Engineer Intern",
			company: "John Deere",
			bullets: [
				"Designed and deployed automated aggregation for AWS indexes that summarized timeframes of data",
				"Created documentation on how teams could utilize machine learning algorithms to alert when anomalous data is found in real time",
			],
			media: Logo3,
			techUsed: [
				tech.aws,
				tech.python,
				tech.kibana,
				tech.elasticsearch,
				tech.github,
			],
		},
		{
			startDate: new Date(2020, 9, 0),
			endDate: new Date(2020, 12, 0),
			title: "Full Stack Software Engineer Intern",
			company: "LevelUP Code Works Software Factory",
			bullets: [
				"Wrote Java/Spring tests for application backend which increased code coverage by 65% and met agile milestone 1 week ahead of time",
				"Prototyped dashboard with Grafana, Python, PostgreSQL, and Jira/GitLab API to showcase agile metrics such as cycle time & lead time",
				"Gained approval and updated Angular application frontend to official LTS version to ease future development and decrease complexity",
				"Participated in DevSecOps culture by putting security at the forefront of each decision and communicating implications of vulnerabilities",
				"Built and modified Nginx configuration script for application to increase security by blocking XSS/SSH attacks and limiting allowable domains",
				"Modified Docker configuration to use Department of Defense hardened images for application frontend and backend to increase security",
			],
			media: Logo2,
			techUsed: [
				tech.java,
				tech.typescript,
				tech.python,
				tech.node,
				tech.angular,
				tech.spring,
				tech.docker,
				tech.gitlab,
				tech.bootstrap,
				tech.nginx,
				tech.grafana,
				tech.sonarqube,
				tech.rancher,
				tech.mattermost,
			],
		},
		{
			startDate: new Date(2018, 9, 0),
			endDate: new Date(2021, 2, 5),
			title: "Intelligence Analyst (Fusion Analyst)",
			company: "United States Air Force",
			bullets: [
				"Communicated valuable threat warning reports that were further briefed to the National Security Council and POTUS",
				"Responsible for quality control on 1000+ reports per year, obtaining 99% accuracy rate each period, well above standard",
				"Conducted bi-annual job performance, goal setting, and career growth counseling for 3 team members",
			],
			media: Logo1,
			description:
				"Produced/presented topical high-interest technical & operational intelligence briefings to leadership.",
		},
		{
			startDate: new Date(2014, 8, 0),
			endDate: new Date(2018, 9, 0),
			title: "Aerospace Maintenance Technician",
			company: "United States Air Force",
			bullets: [
				"Led team of 4 technicians to recover F-18 on runway; restored international airport to active status 75% faster than average recovery times",
				"Worked with a 10-person team to recover collapsed private plane; cleared international airport runway in less than 1 hour",
				"Responded to last minute pre-flight problem for critical Secretary of Defense mission; troubleshot and repaired C-17 cargo ramp that ensured on time take-off",
			],
			media: Logo1,
			description:
				"Specialized in troubleshooting, rigging, and repair of C-17 aircraft flight controls, landing gear, ramp & door. Crash recovery personnel.",
		},
	];
}
