import { render, screen } from "@testing-library/react";
import { IAboutObject, AboutObject } from "../../../information/AboutObject";
import LandingPage from "../LandingPage";

it("renders LandingPage component with proper text", () => {
	const about: IAboutObject = AboutObject();
	const opener: string[] = about.landingOpener;

	render(<LandingPage />);
	opener.forEach((str: string) =>
		expect(screen.getByText(str)).toBeInTheDocument()
	);
});
