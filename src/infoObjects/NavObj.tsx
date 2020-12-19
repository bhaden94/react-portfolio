import InfoIcon from '@material-ui/icons/Info';
import CheckIcon from '@material-ui/icons/Check';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';

interface NavObj {
    text: string
}

export const NavObjects: NavObj[] = [
    {
        text: 'About'
    },
    {
        text: 'Skills'
    },
    {
        text: 'Projects'
    },
    {
        text: 'Experience'
    },
    {
        text: 'Education'
    },
    {
        text: 'Contact'
    },
    {
        text: 'Resume'
    },
]

export const NavIcons = [
    <InfoIcon />,
    <CheckIcon />,
    <DashboardIcon />,
    <WorkIcon />,
    <SchoolIcon />,
    <MailIcon />,
    <DescriptionIcon />
]
