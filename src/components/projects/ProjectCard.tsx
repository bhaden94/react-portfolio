import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import { Icon } from "@icons-pack/react-simple-icons";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "100%",
	},
	media: {
		height: 140,
    },
    icon: {
        display: 'inline',
        padding: '10px'
    }
});

function ProjectCard({ project }: any) {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const classes = useStyles();

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={project.media}
						title="Contemplative Reptile"
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
							{project.shortDesc}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Code
					</Button>
					<Button size="small" color="primary">
						Live Application
					</Button>
					<Button
						onClick={() => setIsFlipped((prev) => !prev)}
						size="small"
						color="secondary"
					>
						See More
					</Button>
				</CardActions>
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
				<CardActions>
					<Button size="small" color="primary">
						Code
					</Button>
					<Button size="small" color="primary">
						Live Application
					</Button>
					<Button
						onClick={() => setIsFlipped((prev) => !prev)}
						size="small"
						color="secondary"
					>
						Flip
					</Button>
				</CardActions>
			</Card>
		</ReactCardFlip>
	);
}

export default ProjectCard;
