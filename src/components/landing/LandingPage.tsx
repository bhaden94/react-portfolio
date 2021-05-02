import { useEffect, useState } from "react";
import {
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from "@material-ui/core/styles";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Moon } from "../../images/landing/moon.svg";
import { ReactComponent as Sun } from "../../images/landing/sun.svg";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			height: "100vh",
		},
		textContainer: {
			padding: "4rem 4rem",
			[theme.breakpoints.down("md")]: {
				padding: "3rem 3rem",
			},
			[theme.breakpoints.down("sm")]: {
				padding: "3rem 3rem",
				marginTop: "60px",
			},
			[theme.breakpoints.down("xs")]: {
				padding: "1.5rem 1.5rem",
			},
		},
		text: {
			fontSize: "4rem",
			[theme.breakpoints.down("md")]: {
				fontSize: "3rem",
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: "2.5rem",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "2rem",
			},
		},
		"@keyframes up": {
			"0%": {
				transform: "translateY(75vh)",
				opacity: "0",
			},
			"100%": {
				transform: "translateY(0)",
			},
		},
		"@keyframes down": {
			"0%": {
				transform: "translateY(0)",
			},
			"100%": {
				transform: "translateY(75vh)",
				opacity: "0",
			},
		},
		celestial: {
			[theme.breakpoints.down("xs")]: {
				top: "150px",
				right: 0,
			},
			top: "170px",
			right: "15%",
			position: "absolute",
			overflow: "visible",
			width: "80px",
			zIndex: -50,
		},
		up: {
			animation: "$up 2s ease-in-out both",
		},
		down: {
			animation: "$down 1s ease-in-out both",
		},
	})
);

// keeps track of render count so we can not animate the sun/mmon on first render
// but animate them on all other renders
let renderCount: number = 0;

function LandingPage() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();
	const theme: Theme = useTheme();
	const [sunUp, setSunUp] = useState<boolean>(theme.palette.type === "light");

	useEffect(() => {
		setSunUp(theme.palette.type === "light");
	}, [theme.palette.type]);

	return (
		<div className={classes.container}>
			<div>
				{renderCount++ === 1 ? (
					theme.palette.type === "light" ? (
						<Sun className={classes.celestial} />
					) : (
						<Moon className={classes.celestial} />
					)
				) : (
					<>
						<Sun
							className={[
								classes.celestial,
								sunUp ? classes.up : classes.down,
							].join(" ")}
						/>

						<Moon
							className={[
								classes.celestial,
								sunUp ? classes.down : classes.up,
							].join(" ")}
						/>
					</>
				)}
			</div>
			<div className={classes.textContainer}>
				{about.landingOpener.map((str: string, i: number) => (
					<Typography key={i} variant="h2" className={classes.text}>
						{str}
					</Typography>
				))}
			</div>
		</div>
	);
}

export default LandingPage;
