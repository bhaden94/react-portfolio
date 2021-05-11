import { render, screen } from "@testing-library/react";
import { AboutObj, AboutObject, Strength } from "../../infoObjects/AboutObj";
import About from "./About";

beforeEach(() => {
	render(<About />);
});

it("render About component headline", () => {
	const about: AboutObj = AboutObject();
	const headline: string = about.headline;

	expect(screen.getByText(headline)).toBeInTheDocument();
});

it("render About component strengths text", () => {
	const about: AboutObj = AboutObject();

	about.strengths.forEach((strength: Strength, i: number) => {
		expect(screen.getByText(strength.short)).toBeInTheDocument();
		expect(screen.getByText(strength.long)).toBeInTheDocument();
	});
});

it("render About component strengths images", () => {
	const about: AboutObj = AboutObject();

	about.strengths.forEach((strength: Strength, i: number) => {
		expect(screen.getByAltText(strength.short)).toBeInTheDocument();
	});
});
