import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		text: {},
	})
);

function LandingPage() {
	const classes = useStyles();

	return (
		<Typography variant="h1" className={classes.text}>
			Top
		</Typography>
	);
}

export default LandingPage;
