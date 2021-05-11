import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";
import Typography from "@material-ui/core/Typography";

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
		},
	})
);

function LandingPage() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div className={classes.container}>
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
