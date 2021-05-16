import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FaceIcon from "@material-ui/icons/Face";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import About from "../components/about/About";
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

export interface INavObject {
	id: number;
	text: string;
	icon: any;
	section: any;
}

export function NavObject(): INavObject[] {
	const classes = useStyles();

	return [
		{
			id: 0,
			text: "About",
			icon: <FaceIcon className={classes.icon} />,
			section: <About />,
		},
		{
			id: 1,
			text: "Skills",
			icon: <BarChartIcon className={classes.icon} />,
			section: <Skills />,
		},
		{
			id: 2,
			text: "Projects",
			icon: <DashboardIcon className={classes.icon} />,
			section: <Projects />,
		},
		{
			id: 3,
			text: "Experience",
			icon: <WorkIcon className={classes.icon} />,
			section: <Experience />,
		},
		{
			id: 4,
			text: "Education",
			icon: <SchoolIcon className={classes.icon} />,
			section: <Education />,
		},
	];
}
