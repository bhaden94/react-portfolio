import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			[theme.breakpoints.down("xl")]: {
				margin: "50px 15%",
			},
			[theme.breakpoints.down("lg")]: {
				margin: "50px 8%",
			},
			[theme.breakpoints.down("md")]: {
				margin: "50px 5%",
			},
			[theme.breakpoints.down("sm")]: {
				margin: "50px 24px",
			},
			[theme.breakpoints.down("xs")]: {
				margin: "50px 24px",
			},
		},
		headline: {
			fontSize: "2rem",
		},
	})
);

function About() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div className={classes.container}>
			<Typography className={classes.headline}>{about.headline}</Typography>
		</div>
	);
}

export default About;
