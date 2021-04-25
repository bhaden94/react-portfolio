import { render, screen } from "@testing-library/react";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";
import LandingPage from "./LandingPage";

it("renders LandingPage component with proper text", () => {
	const about: AboutObj = AboutObject();
	const opener: string[] = about.landingOpener;

	render(<LandingPage />);
	opener.forEach((str: string) =>
		expect(screen.getByText(str)).toBeInTheDocument()
	);
});
