import FaceIcon from '@material-ui/icons/Face';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
// import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.primary.main
        }
    }),
);

export interface NavObj {
    id: number;
    text: string;
    icon: any;
}

export function NavObjects(): NavObj[] {
    const classes = useStyles();

    return (
        [
            {
                id: 0,
                text: 'About',
                icon: <FaceIcon className={classes.icon} />
            },
            {
                id: 1,
                text: 'Skills',
                icon: <BarChartIcon className={classes.icon} />
            },
            {
                id: 2,
                text: 'Projects',
                icon: <DashboardIcon className={classes.icon} />
            },
            {
                id: 3,
                text: 'Experience',
                icon: <WorkIcon className={classes.icon} />
            },
            {
                id: 4,
                text: 'Education',
                icon: <SchoolIcon className={classes.icon} />
            },
            {
                id: 5,
                text: 'Contact',
                icon: <MailIcon className={classes.icon} />
            },
            // {
            //     id: 6,
            //     text: 'Resume',
            //     icon: <DescriptionIcon className={classes.icon} />
            // },
        ]
    )
}
