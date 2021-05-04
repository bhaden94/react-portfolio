import {
	makeStyles,
	Theme,
	createStyles,
} from "@material-ui/core/styles";
import { ReactComponent as Mountain } from "../../images/landing/Mountains-Day.svg";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mnt: {
			position: "absolute",
			pointerEvents: "none",
            overflow: "hidden",
			bottom: 0,
		},
	})
);

function Mountains() {
	const classes = useStyles();

	return <Mountain className={classes.mnt} />;
}

export default Mountains;
