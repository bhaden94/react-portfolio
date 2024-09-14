import {
  createMuiTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import React from "react";
import { DefaultThemeColors } from "../information/ThemeObject";
import { ThemeSchema } from "../sanity-client/schemaTypes/theme/theme";
import { getTheme } from "../sanity-client/sanity.queries";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const ThemeDispatchContext = React.createContext<any>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const defaultThemeColors: ThemeSchema = DefaultThemeColors();
  const themeInitialOptions = {
    paletteType: localStorage.getItem("theme") === "dark" ? "dark" : "light",
  };
  const [themeColors, setThemeColors] = React.useState<ThemeSchema>();

  React.useEffect(() => {
    const fetchData = async () => {
      const themeQuery = await getTheme();
      setThemeColors(themeQuery);
    };
    fetchData();
  }, []);

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
    themeInitialOptions,
  );

  const memoizedTheme = React.useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        type: themeOptions.paletteType,
        primary: {
          main:
            themeOptions.paletteType === "light"
              ? themeColors?.light.primary || defaultThemeColors.light.primary
              : themeColors?.dark.primary || defaultThemeColors.dark.primary,
        },
        secondary: {
          main:
            themeOptions.paletteType === "light"
              ? themeColors?.light.secondary ||
                defaultThemeColors.light.secondary
              : themeColors?.dark.secondary ||
                defaultThemeColors.dark.secondary,
        },
        background: {
          paper:
            themeOptions.paletteType === "light"
              ? themeColors?.light.background.paper ||
                defaultThemeColors.light.background.paper
              : themeColors?.dark.background.paper ||
                defaultThemeColors.dark.background.paper,
          default:
            themeOptions.paletteType === "light"
              ? themeColors?.light.background.default ||
                defaultThemeColors.light.background.default
              : themeColors?.dark.background.default ||
                defaultThemeColors.dark.background.default,
        },
        text: {
          primary:
            themeOptions.paletteType === "light"
              ? themeColors?.light.text.primary ||
                defaultThemeColors.light.text.primary
              : themeColors?.dark.text.primary ||
                defaultThemeColors.dark.text.primary,
          secondary:
            themeOptions.paletteType === "light"
              ? themeColors?.light.text.secondary ||
                defaultThemeColors.light.text.secondary
              : themeColors?.dark.text.secondary ||
                defaultThemeColors.dark.text.secondary,
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
                  ? themeColors?.light.background.default ||
                    defaultThemeColors.light.background.default
                  : themeColors?.dark.background.default ||
                    defaultThemeColors.dark.background.default,
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor:
                themeOptions.paletteType === "light"
                  ? themeColors?.light.primary ||
                    defaultThemeColors.light.primary
                  : themeColors?.dark.primary ||
                    defaultThemeColors.dark.primary,
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
  }, [theme, themeOptions.paletteType, themeColors, defaultThemeColors]);

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
    [theme.palette.type, dispatch],
  );
  localStorage.setItem("theme", theme.palette.type);
  return changeTheme;
};
