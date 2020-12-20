import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface INameTitleHeader {
    isDesktop: boolean
}

function NameTitleHeader({ isDesktop }: INameTitleHeader) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            // necessary for content to be below app bar
            container: {
                padding: isDesktop ? '40px' : '0px',
            },
            name: {
                fontSize: isDesktop ? '2rem' : '1.5rem',
                '&:hover': {
                    color: theme.palette.secondary.main
                }
            },
            title: {
                fontSize: '.8rem'
            }
        }),
    );
    const classes = useStyles();

    return (
        <div className={classes.container}>

            <Typography
                className={classes.name}
                color='primary'
                variant='h1'
            >
                Brady Haden
            </Typography>
            <Typography
                className={classes.title}
                color='textSecondary'
                variant='h2'
            >
                Full Stack Software Engineer
            </Typography>


        </div>
    );
}

export default NameTitleHeader;
