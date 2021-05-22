import { render, screen } from "@testing-library/react";
import { IAboutObject, AboutObject } from "../../../information/AboutObject";
import LandingPage from "../LandingPage";

jest.mock("../../../information/AboutObject");
let mockedAboutObject: IAboutObject;

beforeEach(() => {
	mockedAboutObject = {
		name: "Test Name",
		title: "Software Engineer",
		landingOpener: ["test landing opener"],
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
});

it("renders LandingPage component with opener", () => {
	(AboutObject as jest.Mock).mockReturnValue(mockedAboutObject);

	render(<LandingPage />);

	expect(screen.getByText("test landing opener")).toBeInTheDocument();
});

it("renders LandingPage component without landingOpenerColorOverride", () => {
	mockedAboutObject = {
		name: "Test Name",
		title: "Software Engineer",
		landingOpener: ["test"],
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
	(AboutObject as jest.Mock).mockReturnValue(mockedAboutObject);

	render(<LandingPage />);
});

it("renders LandingPage component with landingOpenerColorOverride", () => {
	mockedAboutObject.landingOpenerColorOverride = "#32a852";
	(AboutObject as jest.Mock).mockReturnValue(mockedAboutObject);

	render(<LandingPage />);
	expect(screen.getAllByTestId("landing-opener-text")[0]).toHaveStyle(
		"color: #32a852;"
	);
});
