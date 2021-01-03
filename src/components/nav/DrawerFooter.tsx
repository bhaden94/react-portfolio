import React from "react";
import {
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import ThemeSwitcher from "../dark-mode/ThemeSwitcher";
import Typography from "@material-ui/core/Typography";
import { ContactObj, ContactObject } from "../../infoObjects/ContactObj";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			position: "fixed",
			bottom: 0,
			padding: 15,
			width: 240, // this is the fixed width of our drawer
		},
		themeLabel: {
			textAlign: "center",
		},
		icon: {
			color: theme.palette.primary.main,
			transition: "color 250ms",
			width: "100%",
			"&:hover": {
				color: theme.palette.secondary.main,
				cursor: "pointer",
			},
		},
	})
);

function DrawerFooter() {
	const classes = useStyles();
	const theme = useTheme();
	const contact: ContactObj[] = ContactObject(classes.icon);

	return (
		<div className={classes.footer}>
			<Typography className={classes.themeLabel} color="textSecondary">
				{theme.palette.type === "light"
					? "Give your eyes a break!"
					: "Isn't that better?"}
			</Typography>
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="flex-start"
			>
				<ThemeSwitcher />
			</Grid>
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="flex-start"
			>
				{contact.map((contactItem: ContactObj) => {
					return (
						<Grid item xs={3} justify="center">
							<Link
								href={contactItem.link}
								target="_blank"
								rel="noreferrer"
							>
								{contactItem.icon}
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default DrawerFooter;
