import Logo1 from "../images/af-logo.png";
import Logo2 from "../images/levelup-logo.png";

export interface ExperienceObj {
	startDate: Date;
	endDate: Date | string;
	title: string;
	company: string;
	bullets: string[];
	media: any;
}

export function ExperienceObject(): ExperienceObj[] {
	// put experience objects in the order that they should display on the page
	return [
		{
			startDate: new Date(2020, 8, 0),
			endDate: new Date(2020, 11, 0),
			title: "Full Stack Software Engineer",
			company: "LevelUP Code Works Software Factory",
			bullets: [
				"Wrote Java/Spring tests for application backend which increased code coverage by 65% and met agile milestone 1 week ahead of time",
				"Prototyped dashboard with Grafana, Python, PostgreSQL, and Jira/GitLab API to showcase agile metrics such as cycle time & lead time",
				"Gained approval and updated Angular application frontend to official LTS version to ease future development and decrease complexity",
				"Participated in DevSecOps culture by putting security at the forefront of each decision and communicating implications of vulnerabilities",
				"Built and modified Nginx configuration script for application to increase security by blocking XSS/SSH attacks and limiting allowable domains",
				"Modified Docker configuration to use Department of Defense hardened images for application frontend and backend to increase security",
			],
			media: (
				<img
					src={Logo2}
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
					}}
					alt="company logo"
				/>
			),
		},
		{
			startDate: new Date(2018, 8, 0),
			endDate: new Date(2021, 2, 5),
			title: "Intelligence Analyst (Fusion Analyst)",
			company: "United States Air Force",
			bullets: [
				"Communicated valuable threat warning reports that were further briefed to the National Security Council and POTUS",
				"Responsible for quality control on 1000+ reports per year, obtaining 99% accuracy rate each period, well above standard",
				"Conducted bi-annual job performance, goal setting, and career growth counseling for 3 team members",
			],
			media: (
				<img
					src={Logo1}
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
					}}
					alt="company logo"
				/>
			),
		},
		{
			startDate: new Date(2014, 7, 0),
			endDate: new Date(2018, 8, 0),
			title: "Aerospace Maintenance Technician",
			company: "United States Air Force",
			bullets: [
				"Led team of 4 technicians to recover F-18 on runway; restored international airport to active status 75% faster than average recovery times",
				"Worked with a 10-person team to recover collapsed private plane; cleared international airport runway in less than 1 hour",
				"Responded to last minute pre-flight problem for critical Secretary of Defense mission; troubleshot and repaired C-17 cargo ramp that ensured on time take-off",
			],
			media: (
				<img
					src={Logo1}
					style={{
						width: "100%",
						height: "100%",
					}}
					alt="company logo"
				/>
			),
		},
	];
}
