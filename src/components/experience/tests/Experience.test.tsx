import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
	ExperienceObject,
	IExperienceObject,
} from "../../../information/ExperienceObject";
import Experience from "../Experience";

jest.mock("../../../information/ExperienceObject");
let mockedExperienceObject: IExperienceObject[];

const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();
beforeEach(() => {
	// mock intersection observer for react vertical timeline
	// @ts-ignore
	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
		disconnect,
	}));
	// mock an experience object
	// This is close to what the default file looks like
	mockedExperienceObject = [
		{
			startDate: new Date(2021, 3, 0),
			endDate: "Present",
			title: "Software Engineer",
			company: "Microsoft",
			bullets: ["Did cool stuff", "Did more really cool stuff"],
			media: "microsoft-img-link",
			description: "test description",
		},
		{
			startDate: new Date(2021, 6, 0),
			endDate: new Date(2021, 9, 0),
			title: "Software Engineer Intern",
			company: "Amazon Web Services",
			bullets: [
				"Did sweet intern stuff",
				"Did another really cool thing",
				"Completed a really cool feature",
			],
			media: "aws-img-link",
		},
	];
	(ExperienceObject as jest.Mock).mockReturnValue(mockedExperienceObject);
	render(<Experience />);
});

it("render Experience component", () => {
	expect(
		screen.getByText(mockedExperienceObject[0].company)
	).toBeInTheDocument();
	expect(
		screen.getByText(mockedExperienceObject[1].title)
	).toBeInTheDocument();
	expect(screen.getByTestId("timeline-img-0")).toHaveAttribute(
		"src",
		mockedExperienceObject[0].media
	);
	// we check for description
	expect(
		screen.getByText(mockedExperienceObject[0].description!)
	).toBeInTheDocument();
	// we check if it is missing
	expect(screen.queryByTestId("timeline-description-1")).toBeNull();
});

it("render Experience modal after click open", () => {
	const openModal = screen.getAllByTestId("open-modal-btn")[0];
	userEvent.click(openModal);
	expect(document.body).toHaveStyle("padding-right: 0px; overflow: hidden;");
});

it("close Experience modal after click close", () => {
	const closeModal = screen.getAllByTestId("close-modal-btn")[0];
	userEvent.click(closeModal);
	expect(document.body).toHaveStyle("visibility: visible;");
});
