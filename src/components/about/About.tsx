import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		
	})
);

function About() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div>About</div>
	);
}

export default About;
