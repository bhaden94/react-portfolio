import { render, screen } from "@testing-library/react";
import { IAboutObject, AboutObject } from "../../../information/AboutObject";
import { MockLightTheme } from "../../../__mock__/MockTheme";
import LandingPage from "../LandingPage";

it("renders LandingPage component with proper text", () => {
	const about: IAboutObject = AboutObject();
	const opener: string[] = about.landingOpener;

	render(<LandingPage />);
	opener.forEach((str: string) =>
		expect(screen.getByText(str)).toBeInTheDocument()
	);
});

it("renders LandingPage component with landingOpenerColorOverride", () => {
	jest.mock("../../../information/AboutObject", () => ({
		AboutObject: jest.fn(() => {
			return {
				name: "Test Name",
				title: "Software Engineer",
				landingOpener: ["test"],
				landingOpenerColorOverride: "#32a852",
				landingImage: "test image",
				headline: "test",
				strengths: [
					{
						short: "test",
						long: "test",
						image: "test image",
					},
				],
			};
		}),
	}));

	render(<MockLightTheme><LandingPage /></MockLightTheme>);
});
