import { render, screen } from "@testing-library/react";
import NameTitleHeader from "../NameTitleHeader";

it("render NameTitleHeader component on desktop", () => {
	render(<NameTitleHeader isDesktop />);
    
	expect(screen.getByTestId("name-title-header-div")).toHaveStyle(
		"padding: 40px;"
	);
});

it("render NameTitleHeader component on mobile", () => {
	render(<NameTitleHeader isDesktop={false} />);

	expect(screen.getByTestId("name-title-header-div")).toHaveStyle(
		"padding: 0px;"
	);
});
