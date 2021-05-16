import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
	ExperienceObject,
	IExperienceObject,
} from "../../../information/ExperienceObject";
import Experience from "../Experience";

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
	render(<Experience />);
});

const exp: IExperienceObject[] = ExperienceObject();

it("render Experience component with title and company name", () => {
	exp.forEach((e: IExperienceObject) => {
		expect(screen.getAllByText(e.title)[0]).toBeInTheDocument();
		expect(screen.getAllByText(e.company)[0]).toBeInTheDocument();
	});
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

//test expand in modal
