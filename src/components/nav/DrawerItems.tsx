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
import NameTitleHeader from './NameTitleHeader';

interface IDrawerItems {
    toggleDrawer(): void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navItem: {
            borderBottom: '2px solid transparent !important',
            '&::after': {
                position: 'absolute',
                left: '50%',
                content: "''",
                height: '3px',
                background: theme.palette.secondary.main,
                transition: 'all 0.1s linear',
                width: 0,
                bottom: '-3px'
            },
            '&:hover p': {
                color: theme.palette.secondary.main
            }
        },
        active: {
            '& $navItem': {
                '&::after': {
                    width: '95%',
                    left: '2.5%'
                }
            },
            '& p': {
                color: 'black'
            }
        },
    }),
);

function DrawerItems({ toggleDrawer }: IDrawerItems) {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div>
            <Hidden smDown implementation="js">
                <Link
                    activeClass={classes.active}
                    to={'top'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                >
                    <NameTitleHeader isDesktop={isDesktop} />
                </Link>
                <Divider />
            </Hidden>
            <List disablePadding>
                {NavObjects().map((listItem: NavObj, index: number) => (
                    <Link
                        activeClass={classes.active}
                        to={listItem.text}
                        spy={true}
                        smooth={true}
                        offset={isDesktop ? 0 : -60}
                        duration={300}
                        key={listItem.id}
                    >
                        <ListItem button className={classes.navItem} onClick={toggleDrawer} >
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
