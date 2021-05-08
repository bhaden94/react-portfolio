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

export const MobileTheme = (props: any) => {
	const theme = createMuiTheme({
		props: { MuiWithWidth: { initialWidth: "sm" } },
	});

	return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export const DesktopTheme = (props: any) => {
	const theme = createMuiTheme({
		props: { MuiWithWidth: { initialWidth: "lg" } },
	});

	return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
