import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import { NavObjects, NavObj } from '../../infoObjects/NavObj'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
);

function DrawerItems({toggleDrawer}: any) {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div>
            <Hidden smDown implementation="js">
                <div className={classes.toolbar} />
                <div>
                    <Link
                        activeClass="active"
                        to={'top'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                    >
                        top
                    </Link>
                </div>
                <Divider />
            </Hidden>
            <List disablePadding>
                {NavObjects.map((listItem: NavObj, index: number) => (
                    <Link
                        activeClass="active"
                        to={listItem.text}
                        spy={true}
                        smooth={true}
                        offset={isDesktop ? 0 : -60}
                        duration={500}
                    >
                        <ListItem button key={listItem.text} className='nav-item' onClick={toggleDrawer} >
                            <ListItemIcon>{listItem.icon}</ListItemIcon>
                            <ListItemText
                                disableTypography
                                primary={
                                    <Typography color='textSecondary'>{listItem.text}</Typography>
                                }
                            />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div >
    );
}

export default DrawerItems;
