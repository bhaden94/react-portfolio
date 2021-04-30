import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMount } from "@material-ui/core/test-utils";
import { MockLightTheme, MockDarkTheme } from "../../testingUtils/MockTheme";
import ReturnToTop from "./ReturnToTop";

beforeAll(() => {
	createMount();
});

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
