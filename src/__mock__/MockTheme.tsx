import {
	createMuiTheme,
	ThemeProvider,
	MuiThemeProvider,
} from "@material-ui/core/styles";

export const MockLightTheme = ({ children }: any) => {
	const lightTheme = createMuiTheme({
		palette: {
			type: "light",
		},
	});
	return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export const MockDarkTheme = ({ children }: any) => {
	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
		},
	});
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export const MobileTheme = ({ children }: any) => {
	const theme = createMuiTheme({
		props: { MuiWithWidth: { initialWidth: "sm" } },
	});

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export const DesktopTheme = ({ children }: any) => {
	const theme = createMuiTheme({
		props: { MuiWithWidth: { initialWidth: "lg" } },
	});

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
