import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from "@material-ui/core/styles";
import { NavObjects, NavObj } from "../../infoObjects/NavObj";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IDrawerItems {
	toggleDrawer(): void;
}

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

function DrawerItems({ toggleDrawer }: IDrawerItems) {
	const classes = useStyles();
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<List disablePadding>
			{NavObjects().map((listItem: NavObj, i: number) => (
				<Link
					activeClass={classes.active}
					to={listItem.text}
					spy={true}
					smooth={true}
					offset={isDesktop ? 0 : -60}
					duration={300}
					key={i}
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
			))}
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
		</List>
	);
}

export default DrawerItems;
