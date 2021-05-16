import { render, screen } from "@testing-library/react";
import { IAboutObject, AboutObject, IStrength } from "../../../information/AboutObject";
import About from "../About";

beforeEach(() => {
	render(<About />);
});

it("render About component headline", () => {
	const about: IAboutObject = AboutObject();
	const headline: string = about.headline;

	expect(screen.getByText(headline)).toBeInTheDocument();
});

it("render About component strengths text", () => {
	const about: IAboutObject = AboutObject();

	about.strengths.forEach((strength: IStrength, i: number) => {
		expect(screen.getByText(strength.short)).toBeInTheDocument();
		expect(screen.getByText(strength.long)).toBeInTheDocument();
	});
});

it("render About component strengths images", () => {
	const about: IAboutObject = AboutObject();

	about.strengths.forEach((strength: IStrength, i: number) => {
		expect(screen.getByAltText(strength.short)).toBeInTheDocument();
	});
});
