import { render, screen } from "@testing-library/react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import ThemeProvider from "./index";

it("renders ThemeProvider component with children", () => {
	const mockTheme: Theme = createMuiTheme({});
	render(
		<ThemeProvider theme={mockTheme}>
			<div>Test div</div>
		</ThemeProvider>
	);

	expect(screen.getByText("Test div")).toBeInTheDocument();
});

// it("useChangeTheme toggles between dark and light", () => {
// 	const mockTheme: Theme = createMuiTheme({});
// 	render(
// 		<ThemeProvider theme={mockTheme}>
// 			<div onClick={useChangeTheme} data-testid="theme-btn">
// 				Theme is: {mockTheme.palette.type}
// 			</div>
// 		</ThemeProvider>
// 	);

// 	const switchTheme = screen.getByTestId("theme-btn");
// 	expect(switchTheme).toHaveTextContent("Theme is: light");

// 	userEvent.click(switchTheme);
// 	expect(switchTheme).toHaveTextContent("Theme is: dark");
// });
