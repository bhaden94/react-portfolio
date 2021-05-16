import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { IAboutObject, AboutObject, IStrength } from "../../information/AboutObject";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useGlobalStyles } from "../../theme/globalStyle";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		headline: {
			fontSize: "2rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
		headContainer: {
			paddingLeft: "2rem",
			[theme.breakpoints.down("sm")]: {
				paddingLeft: "1.5rem",
			},
			borderLeft: `5px solid ${theme.palette.secondary.main}`,
		},
		strengthHead: {
			margin: "60px 0 0",
			fontSize: "2rem",
		},
		fadeIn: {
			margin: "60px 0",
			position: "relative",
			"&:hover $overlay": {
				bottom: 0,
				height: "100%",
			},
		},
		strength: {
			fontSize: "2rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
			textAlign: "center",
			padding: "1.2rem 0",
		},
		image: {
			padding: "1.5rem",
			maxHeight: "400px",
			width: "100%",
			display: "block",
		},
		overlay: {
			position: "absolute",
			bottom: "100%",
			left: 0,
			right: 0,
			backgroundColor: theme.palette.background.default,
			overflow: "hidden",
			width: "100%",
			height: 0,
			transition: ".4s ease",
		},
		overlayText: {
			position: "absolute",
			width: "95%",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			textAlign: "center",
			fontSize: "2rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
	})
);

function About() {
	const classes = useStyles();
	const globalClasses = useGlobalStyles();
	const about: IAboutObject = AboutObject();

	return (
		<div className={globalClasses.container}>
			<div className={classes.headContainer}>
				<Typography className={classes.headline}>
					{about.headline}
				</Typography>
			</div>

			<Typography className={classes.strengthHead}>
				Strengths & Focus Areas
			</Typography>
			{about.strengths.map((strength: IStrength, i: number) => (
				<ScrollAnimation
					key={i}
					duration={0.5}
					animateIn="animate__fadeInUp"
					animateOnce={true}
				>
					<Paper className={classes.fadeIn} elevation={3}>
						{i % 2 === 0 ? (
							<Grid
								container
								justify="space-between"
								alignItems="center"
							>
								<Grid item xs={12} md={8}>
									<Typography
										className={classes.strength}
										color="textSecondary"
									>
										{strength.short}
									</Typography>
								</Grid>
								<Grid item xs={12} md={4}>
									<img
										src={strength.image}
										className={classes.image}
										alt={strength.short}
									/>
								</Grid>
							</Grid>
						) : (
							<Grid
								container
								justify="space-between"
								alignItems="center"
							>
								<Grid item xs={12} md={4}>
									<img
										src={strength.image}
										className={classes.image}
										alt={strength.short}
									/>
								</Grid>
								<Grid item xs={12} md={8}>
									<Typography
										className={classes.strength}
										color="textSecondary"
									>
										{strength.short}
									</Typography>
								</Grid>
							</Grid>
						)}

						{/* What is overlayed on hover */}
						<Paper className={classes.overlay}>
							<Typography
								className={classes.overlayText}
								color="textSecondary"
							>
								{strength.long}
							</Typography>
						</Paper>
					</Paper>
				</ScrollAnimation>
			))}
		</div>
	);
}

export default About;
