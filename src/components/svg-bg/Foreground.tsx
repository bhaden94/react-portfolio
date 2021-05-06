import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import city from "../../images/landing/City.png";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			overflow: "hidden",
		},
		city: {
			position: "absolute",
			pointerEvents: "none",
			bottom: 0,
			right: 0,
			width: "auto",
			height: "70%",
		},
	})
);

function Foreground() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<img src={city} className={classes.city} alt="City foreground" />
		</div>
	);
}

export default Foreground;
