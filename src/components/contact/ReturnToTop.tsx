import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		returnTopContainer: {
			position: "absolute",
			bottom: 0,
			[theme.breakpoints.down("sm")]: {
				bottom: 60,
			},
			"&:hover $returnTop": {
				color:
					theme.palette.type === "dark"
						? theme.palette.primary.main
						: theme.palette.secondary.main,
			},
			width: "100%",
			textAlign: "center",
		},
		returnTop: {
			textAlign: "center",
			transition: "color 250ms",
			color:
				theme.palette.type === "dark"
					? theme.palette.secondary.main
					: theme.palette.primary.main,
		},
	})
);

function ReturnToTop() {
	const classes = useStyles();

	return (
		<Link to={"top"} smooth={true} duration={500}>
			<div
				className={classes.returnTopContainer}
				data-testid="scroll-to-top"
			>
				<ArrowUpwardIcon
					className={classes.returnTop}
					fontSize="large"
				/>
			</div>
		</Link>
	);
}

export default ReturnToTop;
