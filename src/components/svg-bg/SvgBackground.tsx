import SunMoon from "./SunMoon";
import Foreground from "./Foreground";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			//position: "relative",
		},
	})
);

function SvgBackground() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<SunMoon />
			<Foreground />
		</div>
	);
}

export default SvgBackground;
