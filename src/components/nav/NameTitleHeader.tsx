import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";

interface INameTitleHeader {
	isDesktop: boolean;
}

export default function NameTitleHeader({ isDesktop }: INameTitleHeader) {
	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			container: {
				padding: isDesktop ? "40px" : "0px",
			},
			name: {
				fontSize: isDesktop ? "2rem" : "1.5rem",
				transition: "color 250ms",
				"&:hover": {
					color: theme.palette.secondary.main,
				},
			},
			title: {
				fontSize: ".8rem",
			},
		})
	);
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div className={classes.container}>
			<Typography className={classes.name} color="primary" variant="h1">
				{about.name}
			</Typography>
			<Typography
				className={classes.title}
				color="textSecondary"
				variant="h2"
			>
				{about.title}
			</Typography>
		</div>
	);
}
