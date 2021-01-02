export interface AboutObj {
	headline: string;
	strengths: string[];
}

export function AboutObject(): AboutObj {
	return {
		headline:
			"I am Brady, a Full Stack Software Engineer and United States Air Force veteran " +
			"passionate about making a difference through code!",
		strengths: [
			"Beautifully Simplistic UI",
			"Performance Optimized Code",
			"Reliable & Continuous Communication",
		],
	};
}
