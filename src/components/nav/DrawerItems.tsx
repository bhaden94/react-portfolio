import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NavObjects, NavIcons } from '../../infoObjects/NavObj'

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
                {NavObjects.map((listItem, index) => (
                    <ListItem button key={listItem.text}>
                        <ListItemIcon>{NavIcons[index]}</ListItemIcon>
                        <ListItemText primary={listItem.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
