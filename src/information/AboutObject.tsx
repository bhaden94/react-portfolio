import ui from "../images/about/browser.svg";
import perf from "../images/about/performance.svg";
import resp from "../images/about/responsive-design.svg";

import featuredDesktop from "../images/landing/desktop-featured.png";
import featuredMobile from "../images/landing/mobile-featured.png";

export interface IStrength {
	short: string;
	long: string;
	image: string;
}

export interface IAboutObject {
	name: string;
	title: string;
	landingOpener: string[];
	landingOpenerColorOverride?: string;
	landingDesktopImage: string;
	landingMobileImage: string;
	featuredLink: string;
	headline: string;
	strengths: IStrength[];
}

export function AboutObject(): IAboutObject {
	return {
		name: "Brady Haden",
		title: "Software Engineer",
		landingOpener: [
			"Featured: VA Loan Second Tier Entitlement Calculator",
		],
		landingDesktopImage: featuredDesktop,
		landingMobileImage: featuredMobile,
		featuredLink: "https://va-calculator.com",
		headline:
			"Hi I am Brady, a Software Engineer and United States Air Force veteran " +
			"passionate about making a difference through code!",
		strengths: [
			{
				short: "Beautifully Simplistic UI",
				long: "Less is more.",
				image: ui,
			},
			{
				short: "Performance Optimized Code",
				long: "My code is efficient, fast, and organized.",
				image: perf,
			},
			{
				short: "Responsive Web Design",
				long: "Over half of internet usage is from phones or tablets. I take pride in making sites for all devices.",
				image: resp,
			},
		],
	};
}
