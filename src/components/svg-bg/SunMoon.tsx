import { useEffect, useState } from "react";
import {
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from "@material-ui/core/styles";
import { ReactComponent as Moon } from "../../images/landing/Moon.svg";
import { ReactComponent as Sun } from "../../images/landing/Sun.svg";
import { useChangeTheme } from "../../theme";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		"@keyframes up": {
			"0%": {
				opacity: "0",
				transform: "translateY(75vh)",
			},
			"100%": {
				transform: "translateY(0)",
			},
		},
		"@keyframes down": {
			"0%": {
				transform: "translateY(0)",
			},
			"80%": {
				opacity: "0",
			},
			"100%": {
				transform: "translateY(75vh)",
				opacity: "0",
				cursor: "default",
			},
		},
		celestial: {
			[theme.breakpoints.down("xs")]: {
				top: "150px",
				right: "10%",
			},
			top: "170px",
			right: "15%",
			position: "absolute",
			cursor: "pointer",
		},
		up: {
			animation: "$up 1.5s ease-in-out both",
		},
		down: {
			animation: "$down .75s ease-in-out both",
		},
	})
);

// keeps track of render count so we do not animate the sun/moon on first render
// but animate them on all other renders
let renderCount: number = 0;

function SunMoon() {
	const classes = useStyles();
	const changeTheme = useChangeTheme();
	const theme: Theme = useTheme();
	const [sunUp, setSunUp] = useState<boolean>(theme.palette.type === "light");

	useEffect(() => {
		setSunUp(theme.palette.type === "light");
	}, [theme.palette.type]);

	// on first render we do not animate
	// on all subsequent renders (meaning anytime the theme is switched) we will animate
	const sunMoonRender = (animate: boolean) => {
		if (animate) {
			return (
				<>
					<Sun
						className={[
							classes.celestial,
							sunUp ? classes.up : classes.down,
						].join(" ")}
						onClick={changeTheme}
					/>

					<Moon
						className={[
							classes.celestial,
							sunUp ? classes.down : classes.up,
						].join(" ")}
						onClick={changeTheme}
					/>
				</>
			);
		} else {
			return sunUp ? (
				<Sun className={classes.celestial} onClick={changeTheme} />
			) : (
				<Moon className={classes.celestial} onClick={changeTheme} />
			);
		}
	};

	return <div>{sunMoonRender(renderCount++ > 1)}</div>;
}

export default SunMoon;
