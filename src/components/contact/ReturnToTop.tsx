import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// import Link from "@material-ui/core/Link";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		returnTopContainer: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			textAlign: "center",
		},
		returnTop: {
			textAlign: "center",
		},
	})
);

function ReturnToTop() {
	const classes = useStyles();

	return (
		<Link to={"top"} smooth={true} duration={300}>
			<div className={classes.returnTopContainer}>
				<ArrowUpwardIcon
					className={classes.returnTop}
					fontSize="large"
					color="secondary"
				/>
			</div>
		</Link>
	);
}

export default ReturnToTop;
