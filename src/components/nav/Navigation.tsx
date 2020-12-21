import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DrawerItems from './DrawerItems'
import NameTitleHeader from './NameTitleHeader';
import DrawerFooter from './DrawerFooter';
import { Link } from 'react-scroll';
import Divider from '@material-ui/core/Divider';
import ThemeSwitcher from '../dark-mode/ThemeSwitcher';


const drawerWidth: number = 240;
const drawerBreakpoint: any = 'md'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up(drawerBreakpoint)]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main,
      [theme.breakpoints.up(drawerBreakpoint)]: {
        display: 'none',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(drawerBreakpoint)]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
            <MenuIcon fontSize='large' />
          </IconButton>
          <NameTitleHeader isDesktop={isDesktop} />
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="Links to page items">
        <Hidden mdUp implementation="js">
          <SwipeableDrawer
            anchor='left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerItems toggleDrawer={handleDrawerToggle} />
            <DrawerFooter />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="js">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Link
              to={'top'}
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <NameTitleHeader isDesktop={isDesktop} />
            </Link>
            <Divider />
            <DrawerItems toggleDrawer={handleDrawerToggle} />
            <DrawerFooter />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
