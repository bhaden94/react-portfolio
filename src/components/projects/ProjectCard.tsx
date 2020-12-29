import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import { Icon } from "@icons-pack/react-simple-icons";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import FlipToFrontIcon from "@material-ui/icons/FlipToFront";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "325px",
	},
	media: {
		height: 140,
	},
	icon: {
		display: "inline",
		padding: "10px",
	},
	actions: {
		position: "absolute",
		bottom: 0,
		width: "100%",
	},
});

function Actions({ flipCard, flipBtn }: any) {
	const classes = useStyles();

	return (
		<CardActions className={classes.actions}>
			<Grid container justify="space-between">
				<Grid item>
					<Tooltip
						title="Code"
						placement="bottom"
						enterDelay={250}
						arrow
					>
						<Button size="small" color="primary">
							<GitHubIcon />
						</Button>
					</Tooltip>
					<Tooltip
						title="Live Application"
						placement="bottom"
						enterDelay={250}
						arrow
					>
						<Button size="small" color="primary">
							<LinkIcon />
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Button onClick={flipCard} size="small" color="secondary">
						{flipBtn}
					</Button>
				</Grid>
			</Grid>
		</CardActions>
	);
}

function ProjectCard({ project }: any) {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const classes = useStyles();

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<Card className={classes.root} elevation={3}>
				<CardMedia
					className={classes.media}
					image={project.media}
					title="Project Image"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{project.title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{project.shortDesc.substring(0, 125)}
					</Typography>
				</CardContent>
				<Actions flipCard={flipCard} flipBtn={<FlipToBackIcon />} />
			</Card>

			<Card className={classes.root}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{project.title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{project.longDesc}
					</Typography>
					{project.techUsed.map((tech: Icon) => {
						return (
							<div
								className={["icon-hover", classes.icon].join(
									" "
								)}
							>
								{tech}
							</div>
						);
					})}
				</CardContent>
				<Actions flipCard={flipCard} flipBtn={<FlipToFrontIcon />} />
			</Card>
		</ReactCardFlip>
	);
}

export default ProjectCard;
