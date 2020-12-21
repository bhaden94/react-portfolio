import React from 'react';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ThemeSwitcher from '../dark-mode/ThemeSwitcher';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            position: "fixed",
            bottom: 0,
            padding: 15,
            width: 240 // this is the fixed width of our drawer
        },
        themeLabel: {
            textAlign: 'center'
        },
        icon: {
            color: theme.palette.primary.main,
            '&:hover': {
                color: theme.palette.secondary.main,
                cursor: 'pointer'
            }
        }
    }),
);

function DrawerFooter() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.footer}>
            <Typography className={classes.themeLabel} color='textSecondary'>
                {theme.palette.type === 'light' ? "Give your eyes a break!" : "Isn't that better?"}
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
                <Link href='https://github.com/bhaden94' target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize='large' className={classes.icon} />
                </Link>
                <Link href='https://www.linkedin.com/in/brady-haden/' target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize='large' className={classes.icon} />
                </Link>
                <Link href='mailto:brady.s.haden@gmail.com?subject=Greetings From Portfolio'>
                    <AlternateEmailIcon fontSize='large' className={classes.icon} />
                </Link>
            </Grid>
        </div >
    );
}

export default DrawerFooter;
