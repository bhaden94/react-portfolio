import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import DrawerItems from './DrawerItems'

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(theme.breakpoints.up(drawerBreakpoint))

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Brady Haden
          </Typography>
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
            <DrawerItems toggleDrawer={handleDrawerToggle} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
