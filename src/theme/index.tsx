import React from "react";
import {
	createMuiTheme,
	ThemeProvider as MuiThemeProvider,
	Theme,
} from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import { blueGrey, grey, teal, amber } from "@material-ui/core/colors";

interface ThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}

const ThemeDispatchContext = React.createContext<any>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
	const themeInitialOptions = {
		paletteType:
			localStorage.getItem("theme") === "dark" ? "dark" : "light",
	};

	const [themeOptions, dispatch] = React.useReducer(
		(state: any, action: any) => {
			switch (action.type) {
				case "changeTheme":
					return {
						...state,
						paletteType: action.payload,
					};
				default:
					throw new Error();
			}
		},
		themeInitialOptions
	);

	const memoizedTheme = React.useMemo(() => {
		return createMuiTheme({
			...theme,
			palette: {
				type: themeOptions.paletteType,
				primary: {
					main:
						themeOptions.paletteType === "light"
							? teal[900]
							: teal[500],
				},
				secondary: {
					main:
						themeOptions.paletteType === "light"
							? amber[600]
							: amber[800],
				},
				background: {
					paper:
						themeOptions.paletteType === "light"
							? grey[50]
							: blueGrey[900],
					default:
						themeOptions.paletteType === "light"
							? grey[200]
							: blueGrey[800],
				},
			},
		});
	}, [theme, themeOptions.paletteType]);

	return (
		<MuiThemeProvider theme={memoizedTheme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</MuiThemeProvider>
	);
};

export default ThemeProvider;

export const useChangeTheme = () => {
	const dispatch = React.useContext(ThemeDispatchContext);
	const theme = useTheme();
	const changeTheme = React.useCallback(
		() =>
			dispatch({
				type: "changeTheme",
				payload: theme.palette.type === "light" ? "dark" : "light",
			}),
		[theme.palette.type, dispatch]
	);
	localStorage.setItem("theme", theme.palette.type);
	return changeTheme;
};
