import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AboutObject, IAboutObject } from "../../information/AboutObject";

function LandingPage() {
	const about: IAboutObject = AboutObject();
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
				[theme.breakpoints.down("sm")]: {
					fontSize: "2.5rem",
				},
				color:
					about.landingOpenerColorOverride ||
					theme.palette.text.primary,
			},
		})
	);
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				{about.landingOpener.map((str: string, i: number) => (
					<Typography
						key={i}
						variant="h2"
						className={classes.text}
						data-testid="landing-opener-text"
					>
						{str}
					</Typography>
				))}
			</div>
		</div>
	);
}

export default LandingPage;
