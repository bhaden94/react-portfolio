import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AboutObj, AboutObject, Strength } from "../../infoObjects/AboutObj";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			[theme.breakpoints.down("xl")]: {
				margin: "50px 15%",
			},
			[theme.breakpoints.down("lg")]: {
				margin: "50px 8%",
			},
			[theme.breakpoints.down("md")]: {
				margin: "50px 5%",
			},
			[theme.breakpoints.down("sm")]: {
				margin: "50px 24px",
			},
			[theme.breakpoints.down("xs")]: {
				margin: "50px 24px",
			},
		},
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
		},
		strength: {
			fontSize: "1.8rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.35rem",
			},
			textAlign: "center",
			padding: "1.2rem 0",
		},
		image: {
			padding: "1.5rem",
			width: "100%",
			display: "block",
		},
	})
);

function About() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div className={classes.container}>
			<div className={classes.headContainer}>
				<Typography className={classes.headline}>
					{about.headline}
				</Typography>
			</div>

			<Typography className={classes.strengthHead} color="textSecondary">
				Strengths & Focus Areas
			</Typography>
			{about.strengths.map((strength: Strength, i: number) => (
				<ScrollAnimation
					key={i}
					duration={0.5}
					animateIn="fadeInUp"
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
					</Paper>
				</ScrollAnimation>
			))}
		</div>
	);
}

export default About;
