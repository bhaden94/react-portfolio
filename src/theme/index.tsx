import {
	createMuiTheme,
	Theme,
	ThemeProvider as MuiThemeProvider,
	useTheme,
} from "@material-ui/core/styles";
import React from "react";
import { IThemeObject, ThemeObject } from "../information/ThemeObject";

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
		const colors: IThemeObject = ThemeObject();

		return createMuiTheme({
			...theme,
			palette: {
				type: themeOptions.paletteType,
				primary: {
					main:
						themeOptions.paletteType === "light"
							? colors.light.primary
							: colors.dark.primary,
				},
				secondary: {
					main:
						themeOptions.paletteType === "light"
							? colors.light.secondary
							: colors.dark.secondary,
				},
				background: {
					paper:
						themeOptions.paletteType === "light"
							? colors.light.background.paper
							: colors.dark.background.paper,
					default:
						themeOptions.paletteType === "light"
							? colors.light.background.default
							: colors.dark.background.default,
				},
				text: {
					primary:
						themeOptions.paletteType === "light"
							? colors.light.text.primary
							: colors.dark.text.primary,
					secondary:
						themeOptions.paletteType === "light"
							? colors.light.text.secondary
							: colors.dark.text.secondary,
				},
			},
			overrides: {
				MuiCssBaseline: {
					"@global": {
						body: {
							transition: "all 0.2s linear",
						},
						div: {
							transition: "background-color 0.2s linear",
						},
						"*::-webkit-scrollbar": {
							width: "0.8em",
						},
						"*::-webkit-scrollbar-track": {
							"-webkit-box-shadow": "inset 0 0 3px rgba(0, 0, 0, 0.75)",
							backgroundColor:
								themeOptions.paletteType === "light"
									? colors.light.background.default
									: colors.dark.background.default,
						},
						"*::-webkit-scrollbar-thumb": {
							backgroundColor:
								themeOptions.paletteType === "light"
									? colors.light.primary
									: colors.dark.primary,
							borderRadius: "20px",
						},
					},
				},
				MuiPaper: {
					root: {
						transition: "all 0.2s linear",
					},
				},
				MuiAppBar: {
					root: {
						transition: "all 0.2s linear",
					},
				},
				MuiTypography: {
					root: {
						transition: "color 0.2 linear",
					},
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
