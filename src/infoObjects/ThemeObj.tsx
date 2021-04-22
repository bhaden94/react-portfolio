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
