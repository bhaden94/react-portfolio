import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-scroll";
import { INavObject, NavObject } from "../../information/NavObject";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navItem: {
			borderBottom: "2px solid transparent !important",
			"&::after": {
				position: "absolute",
				left: "50%",
				content: "''",
				height: "3px",
				background: theme.palette.secondary.main,
				transition: "all 0.1s linear",
				width: 0,
				bottom: "-3px",
			},
			"&:hover p": {
				color: theme.palette.secondary.main,
			},
		},
		active: {
			"& $navItem": {
				"&::after": {
					width: "95%",
					left: "2.5%",
				},
			},
			"& p": {
				color: theme.palette.text.primary,
			},
		},
		icon: {
			color: theme.palette.primary.main,
		},
	})
);

interface IDrawerItems {
	toggleDrawer: () => void;
	isDesktop: boolean;
}

function DrawerItems({ toggleDrawer, isDesktop }: IDrawerItems) {
	const classes = useStyles();
	const nav: INavObject[] = NavObject();

	return (
		<List disablePadding>
			{nav.map((listItem: INavObject, i: number) => (
				<li key={i}>
					<Link
						activeClass={classes.active}
						to={listItem.text}
						spy={true}
						smooth={true}
						offset={isDesktop ? 0 : -60}
						duration={300}
						data-testid={`nav-link-${isDesktop}`}
					>
						<ListItem
							button
							className={classes.navItem}
							onClick={toggleDrawer}
						>
							<ListItemIcon>{listItem.icon}</ListItemIcon>
							<ListItemText
								disableTypography
								primary={
									<Typography color="textSecondary">
										{listItem.text}
									</Typography>
								}
							/>
						</ListItem>
					</Link>
				</li>
			))}
			<li key={nav.length}>
				<Link
					activeClass={classes.active}
					to={"Contact"}
					spy={true}
					smooth={true}
					offset={isDesktop ? 0 : -60}
					duration={300}
				>
					<ListItem
						button
						className={classes.navItem}
						onClick={toggleDrawer}
					>
						<ListItemIcon>
							<MailIcon className={classes.icon} />
						</ListItemIcon>
						<ListItemText
							disableTypography
							primary={
								<Typography color="textSecondary">
									Contact
								</Typography>
							}
						/>
					</ListItem>
				</Link>
			</li>
		</List>
	);
}

export default DrawerItems;
