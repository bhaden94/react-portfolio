import { render, screen } from "@testing-library/react";
import {
	ExperienceObject,
	ExperienceObj,
} from "../../infoObjects/ExperienceObj";
import Experience from "./Experience";

const observe = jest.fn();
const unobserve = jest.fn();
beforeEach(() => {
	// mock intersection observer for react vertical timeline
	// @ts-ignore
	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
	}));
});

const exp: ExperienceObj[] = ExperienceObject();

it("render Experience component with title and company name", () => {
	render(<Experience />);

	exp.forEach((e: ExperienceObj) => {
		expect(screen.getByText(e.title)).toBeInTheDocument();
		expect(screen.getByText(e.company)).toBeInTheDocument();
	});
});
