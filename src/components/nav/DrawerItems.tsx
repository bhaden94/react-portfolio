import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NavObjects, NavObj } from '../../infoObjects/NavObj'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
);

export default function DrawerItems() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {NavObjects.map((listItem: NavObj, index: number) => (
                    <Link
                        activeClass="active"
                        to={listItem.text}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <ListItem button key={listItem.text} className='nav-item' >
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
