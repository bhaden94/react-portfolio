import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "../ThemeSwitcher";
import { MockLightTheme, MockDarkTheme } from "../../../__mock__/MockTheme";

it("renders ThemeSwitcher with light theme", () => {
	render(
		<MockLightTheme>
			<ThemeSwitcher />
		</MockLightTheme>
	);

	expect(screen.getByTestId("light")).toBeInTheDocument();
});

it("renders ThemeSwitcher with dark theme", () => {
	render(
		<MockDarkTheme>
			<ThemeSwitcher />
		</MockDarkTheme>
	);

	expect(screen.getByTestId("dark")).toBeInTheDocument();
});
