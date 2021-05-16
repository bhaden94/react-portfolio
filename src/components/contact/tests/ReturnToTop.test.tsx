import { render, screen } from "@testing-library/react";
import { MockLightTheme, MockDarkTheme } from "../../../__mock__/MockTheme";
import ReturnToTop from "../ReturnToTop";

it("renders ScrollToTop component in light theme", () => {
	render(
		<MockLightTheme>
			<ReturnToTop />
		</MockLightTheme>
	);

	expect(screen.getByTestId("scroll-to-top")).toBeInTheDocument();
});

it("renders ScrollToTop component in dark theme", () => {
	render(
		<MockDarkTheme>
			<ReturnToTop />
		</MockDarkTheme>
	);

	expect(screen.getByTestId("scroll-to-top")).toBeInTheDocument();
});
