import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
	palette: {
		type: "light",
	},
});

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

export const MockLightTheme = ({ children }: any) => {
	return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export const MockDarkTheme = ({ children }: any) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
