import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { ContactObj, ContactObject } from "../../infoObjects/ContactObj";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
			color: theme.palette.background.default,
		},
		button: {
			borderRadius: "50%",
			height: "70px",
			width: "70px",
			marginRight: "20px",
		},
		item: {
			margin: "2% 0",
		},
		container: {
			padding: "2% 5%",
			position: "relative",
		},
		text: {
			position: "relative",
			"&:hover": {
				textDecoration: "none",
			},
			"&::before": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: "3px",
				bottom: 0,
				left: 0,
				backgroundColor: theme.palette.secondary.main,
				visibility: "hidden",
				transform: "scaleX(0)",
				transition: "all 0.1s linear",
			},
			"&:hover::before": {
				visibility: "visible",
				transform: "scaleX(1)",
			},
		},
	})
);

function Contact() {
	const classes = useStyles();
	const contact: ContactObj[] = ContactObject(classes.icon);

	return (
		<Grid container direction="column" className={classes.container}>
			{contact.map((contactInfo: ContactObj) => {
				return (
					<Grid item className={classes.item}>
						<Button
							href={contactInfo.link}
							className={classes.button}
							target="_blank"
							rel="noreferrer"
							variant="contained"
							size="large"
							color="primary"
						>
							{contactInfo.icon}
						</Button>
						<Link
							className={classes.text}
							href={contactInfo.link}
							target="_blank"
							rel="noreferrer"
						>
							{contactInfo.text}
						</Link>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default Contact;
