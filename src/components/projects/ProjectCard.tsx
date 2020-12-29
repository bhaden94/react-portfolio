import React, { useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import { Icon } from "@icons-pack/react-simple-icons";
import FlipToFrontIcon from "@material-ui/icons/FlipToFront";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import Actions from "./Actions";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "450px",
	},
	media: {
		height: 220,
		width: "100%",
		filter: "brightness(100%)",
		transition: "filter .2s ease-in-out",
		"&:hover": {
			filter: "brightness(60%)",
		},
	},
	icon: {
		display: "inline",
		padding: "10px",
	},
	longDesc: {
		height: "220px",
	},
	bullets: {
		listStyle: "inside",
		padding: 0,
		margin: 0,
		fontSize: "1rem",
		maxHeight: '180px',
    	overflowY: 'auto',
		"& li": {
			marginBottom: "8px",
			color: theme.palette.text.secondary,
		},
	},
}));

function ProjectCard({ project }: any) {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const classes = useStyles();

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			{/* FRONT of card */}
			<Card className={classes.root} elevation={3}>
				<Link href={project.liveLink} target="_blank" rel="noreferrer">
					<CardMedia
						className={classes.media}
						src={project.media}
						component="img"
						title="Project Image"
					/>
				</Link>
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
				<Actions
					flipCard={flipCard}
					flipBtn={<FlipToBackIcon />}
					code={project.codeLink}
					live={project.liveLink}
				/>
			</Card>
			{/* FRONT of card */}

			{/* BACK of card */}
			<Card className={classes.root}>
				<CardContent>
					<div className={classes.longDesc}>
						<Typography gutterBottom variant="h5" component="h3">
							Accomplishments
						</Typography>
						<ul className={classes.bullets}>
							{project.accomplishments.map((acc: string) => (
								<li>{acc}</li>
							))}
						</ul>
					</div>
					<Typography gutterBottom variant="h6" component="h4">
						Technologies Used
					</Typography>
					{/* only allow first 9 technologies here so we dont overflow the card */}
					{project.techUsed.slice(0, 9).map((tech: Icon) => {
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
			{/* BACK of card */}
		</ReactCardFlip>
	);
}

export default ProjectCard;
