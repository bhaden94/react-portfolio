import FaceIcon from '@material-ui/icons/Face';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';

export interface NavObj {
    text: string
    icon: any
}

export const NavObjects: NavObj[] = [
    {
        text: 'About',
        icon: <FaceIcon style={{color: '#f44336'}} />
    },
    {
        text: 'Skills',
        icon: <BarChartIcon style={{color: '#f44336'}} />
    },
    {
        text: 'Projects',
        icon: <DashboardIcon style={{color: '#f44336'}}/>
    },
    {
        text: 'Experience',
        icon: <WorkIcon style={{color: '#f44336'}} />
    },
    {
        text: 'Education',
        icon: <SchoolIcon style={{color: '#f44336'}} />
    },
    {
        text: 'Contact',
        icon: <MailIcon style={{color: '#f44336'}} />
    },
    {
        text: 'Resume',
        icon: <DescriptionIcon style={{color: '#f44336'}} />
    },
]
