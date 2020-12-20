import FaceIcon from '@material-ui/icons/Face';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        icon: {
            color: theme.palette.primary.main
        }
    }),
);

export interface NavObj {
    text: string
    icon: any
}

export function NavObjects() {
    const classes = useStyles();

    return (
        [
            {
                text: 'About',
                icon: <FaceIcon className={classes.icon} />
            },
            {
                text: 'Skills',
                icon: <BarChartIcon className={classes.icon} />
            },
            {
                text: 'Projects',
                icon: <DashboardIcon className={classes.icon} />
            },
            {
                text: 'Experience',
                icon: <WorkIcon className={classes.icon} />
            },
            {
                text: 'Education',
                icon: <SchoolIcon className={classes.icon} />
            },
            {
                text: 'Contact',
                icon: <MailIcon className={classes.icon} />
            },
            {
                text: 'Resume',
                icon: <DescriptionIcon className={classes.icon} />
            },
        ]
    )
    // const NavObjects: NavObj[] = 
}