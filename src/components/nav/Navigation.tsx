import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import {
	createStyles,
	makeStyles,
	Theme,
	useTheme
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Suspense } from "react";
import { Link } from "react-scroll";
import NameTitleHeader from "./NameTitleHeader";

/* Lazy imports */
const Drawer = React.lazy(() => import("@material-ui/core/Drawer"));
const SwipeableDrawer = React.lazy(
	() => import("@material-ui/core/SwipeableDrawer")
);
const DrawerItems = React.lazy(() => import("./DrawerItems"));
const DrawerFooter = React.lazy(() => import("./DrawerFooter"));

// constants
const DRAWER_WIDTH: number = 240;
const DRAWER_BREAKPOINT: any = "md";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		drawer: {
			[theme.breakpoints.up(DRAWER_BREAKPOINT)]: {
				width: DRAWER_WIDTH,
				flexShrink: 0,
			},
		},
		appBar: {
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.primary.main,
			[theme.breakpoints.up(DRAWER_BREAKPOINT)]: {
				display: "none",
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up(DRAWER_BREAKPOINT)]: {
				display: "none",
			},
		},
		drawerPaper: {
			width: DRAWER_WIDTH,
		},
	})
);

function Navigation() {
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon
							fontSize="large"
							data-testid="mobile-drawer-opener"
						/>
					</IconButton>
					<NameTitleHeader isDesktop={isDesktop} />
				</Toolbar>
			</AppBar>

			<nav className={classes.drawer} aria-label="Links to page items">
				<Hidden mdUp implementation="js">
					<Suspense fallback={<div>Loading Navbar...</div>}>
						<SwipeableDrawer
							anchor="left"
							open={mobileOpen}
							onClose={handleDrawerToggle}
							onOpen={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
							data-testid="mobile-drawer"
						>
							<DrawerItems
								toggleDrawer={handleDrawerToggle}
								isDesktop={isDesktop}
							/>
							<DrawerFooter />
						</SwipeableDrawer>
					</Suspense>
				</Hidden>
				<Hidden smDown implementation="js">
					<Suspense fallback={<div>Loading Navbar...</div>}>
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
							data-testid="desktop-drawer"
						>
							<Link
								to={"top"}
								spy={true}
								smooth={true}
								offset={0}
								duration={300}
							>
								<NameTitleHeader isDesktop={isDesktop} />
							</Link>
							<Divider />
							<DrawerItems
								toggleDrawer={handleDrawerToggle}
								isDesktop={isDesktop}
							/>
							<DrawerFooter />
						</Drawer>
					</Suspense>
				</Hidden>
			</nav>
		</div>
	);
}

export default Navigation;
