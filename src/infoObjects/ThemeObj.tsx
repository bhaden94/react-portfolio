import { PropTypes } from "@material-ui/core";
import { blueGrey, grey, teal, amber } from "@material-ui/core/colors";

interface ThemeObj2 {
	primary: string | PropTypes.Color;
	secondary: string | PropTypes.Color;
	background: {
		paper: string | PropTypes.Color;
		default: string | PropTypes.Color;
	};
	text: string | PropTypes.Color;
}

export interface ThemeObj {
	light: ThemeObj2;
	dark: ThemeObj2;
}

/*
	This is used to set custom colors for your portfolios 
	light/dark mode.

	Any valid CSS value will work here
		Ex: "#9c27b0", "purple", "rgb(156,39,176, 1)"
	Or you may import and use Materil-UI colors as in the example
		https://material-ui.com/customization/color/
*/
export function ThemeObjects(): ThemeObj {
	return {
		light: {
			primary: teal[900],
			secondary: amber[600],
			background: {
				paper: grey[50],
				default: grey[200],
			},
			text: "rgba(0, 0, 0, 0.75)",
		},
		dark: {
			primary: teal[500],
			secondary: amber[800],
			background: {
				paper: blueGrey[900],
				default: blueGrey[800],
			},
			text: "rgba(255, 255, 255, 0.75)",
		},
	};
}
