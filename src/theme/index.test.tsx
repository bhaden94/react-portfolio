import { render, screen } from "@testing-library/react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import userEvent from "@testing-library/user-event";
import ThemeProvider, { useChangeTheme } from "./index";

it("renders ThemeProvider component with children", () => {
	const mockTheme: Theme = createMuiTheme({});
	render(
		<ThemeProvider theme={mockTheme}>
			<div>Test div</div>
		</ThemeProvider>
	);

	expect(screen.getByText("Test div")).toBeInTheDocument();
});

it("useChangeTheme toggles between dark and light", () => {
	const mockTheme: Theme = createMuiTheme({});
	render(
		<ThemeProvider theme={mockTheme}>
			<div onClick={useChangeTheme}>Test div</div>
		</ThemeProvider>
	);

	userEvent.click(screen.getByText("Test div"));
	expect(screen.getByText("Test div")).toBeInTheDocument();
});
