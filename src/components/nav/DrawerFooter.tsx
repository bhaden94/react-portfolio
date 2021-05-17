import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {
	createStyles,
	makeStyles,
	Theme,
	useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IContactObject, ContactObject } from "../../information/ContactObject";
import ThemeSwitcher from "../dark-mode/ThemeSwitcher";

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
	const contact: IContactObject[] = ContactObject(classes.icon);

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
				{contact.map((contactItem: IContactObject, i: number) => (
					<Grid key={i} item xs={3}>
						<Link
							href={contactItem.link}
							target="_blank"
							rel="noreferrer"
							aria-label={contactItem.name}
						>
							{contactItem.icon}
						</Link>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default DrawerFooter;
