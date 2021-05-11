import { render, screen } from "@testing-library/react";
import App from "./App";

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
	render(<App />);
});

it("render App component", () => {
	expect(screen.getByTestId("root-app-div")).toBeInTheDocument();
});
