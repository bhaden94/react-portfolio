import ui from "../images/about/browser.svg";
import perf from "../images/about/performance.svg";
import conv from "../images/about/conversation.svg";

export interface Strength {
	short: string;
	long: string;
	image: any;
}

export interface AboutObj {
	headline: string;
	strengths: Strength[];
}

export function AboutObject(): AboutObj {
	return {
		headline:
			"I am Brady, a Full Stack Software Engineer and United States Air Force veteran " +
			"passionate about making a difference through code!",
		strengths: [
			{
				short: "Beautifully Simplistic UI",
				long: "Beautifully Simplistic UI",
				image: ui,
			},
			{
				short: "Performance Optimized Code",
				long: "Performance Optimized Code",
				image: perf,
			},
			{
				short: "Reliable & Continuous Communication",
				long: "Reliable & Continuous Communication",
				image: conv,
			},
		],
	};
}
