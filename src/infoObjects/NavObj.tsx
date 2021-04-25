import FaceIcon from "@material-ui/icons/Face";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import About from "../components/about/About"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
			color: theme.palette.primary.main,
		},
	})
);

export interface NavObj {
	id: number;
	text: string;
	icon: any;
	section: any;
}

export function NavObjects(): NavObj[] {
	const classes = useStyles();

	return [
		{
			id: 0,
			text: "About",
			icon: <FaceIcon className={classes.icon} />,
			section: <About />
		},
		{
			id: 1,
			text: "Skills",
			icon: <BarChartIcon className={classes.icon} />,
			section: <Skills />
		},
		{
			id: 2,
			text: "Projects",
			icon: <DashboardIcon className={classes.icon} />,
			section: <Projects />
		},
		{
			id: 3,
			text: "Experience",
			icon: <WorkIcon className={classes.icon} />,
			section: <Experience />
		},
		{
			id: 4,
			text: "Education",
			icon: <SchoolIcon className={classes.icon} />,
			section: <Education />
		},
	];
}
