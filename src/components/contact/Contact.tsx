import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ContactObj, ContactObject } from '../../infoObjects/ContactObj'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.background.default,
        },
        button: {
            borderRadius: '50%',
            height: '70px',
            width: '70px',
            marginRight: '20px'
        },
        item: {
            margin: '2% 0'
        },
        container: {
            padding: '2% 5%'
        }
    }),
);

function Contact() {
    const classes = useStyles();
    const contact: ContactObj = ContactObject()

    return (
        <Grid
            container
            direction="column"
            className={classes.container}
        >
            <Grid item className={classes.item}>
                <Button
                    href={contact.github}
                    className={classes.button}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    size="large"
                    color="primary"
                >
                    <GitHubIcon fontSize='large' className={classes.icon} />

                </Button>
                <Link href={contact.github}>See me on GitHub</Link>
            </Grid>
            <Grid item className={classes.item}>
                <Button
                    href={contact.linkedin}
                    className={classes.button}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    size="large"
                    color="primary"
                >
                    <LinkedInIcon fontSize='large' className={classes.icon} />
                </Button>
                <Link href={contact.github}>Connect with me on LinkedIn</Link>
            </Grid>
            <Grid item className={classes.item}>
                <Button
                    href={contact.email}
                    className={classes.button}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    size="large"
                    color="primary"
                >
                    <AlternateEmailIcon fontSize='large' className={classes.icon} />
                </Button>
                <Link href={contact.github}>Send me an email</Link>
            </Grid>
        </Grid>
    );
}

export default Contact;
