import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import FlipToBackIcon from "@material-ui/icons/FlipToBack";
import FlipToFrontIcon from "@material-ui/icons/FlipToFront";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IProjectObject } from "../../information/ProjectsObject";
import Actions from "./Actions";
import CardBackContent from "./CardBackContent";
import CardFrontContent from "./CardFrontContent";

interface IProjectCard {
	project: IProjectObject;
}

function ProjectCard({ project }: IProjectCard) {
	const useStyles = makeStyles(() => ({
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
				filter:
					(project.liveLink || project.codeLink) && "brightness(60%)",
				cursor:
					project.liveLink || project.codeLink
						? "pointer"
						: "default",
			},
		},
	}));
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const classes = useStyles();

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	const determineLink = (): string | undefined => {
		if (project.liveLink) {
			return project.liveLink;
		} else if (project.codeLink && !project.liveLink) {
			return project.codeLink;
		} else {
			return undefined;
		}
	};

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			{/* FRONT of card */}
			<Card
				className={classes.root}
				elevation={3}
				data-testid="flipping-card-front"
			>
				<Link
					href={determineLink()}
					target="_blank"
					rel="noreferrer"
					data-testid="flipping-card-media"
				>
					<CardMedia
						className={classes.media}
						src={project.media}
						component="img"
						title="Project Image"
					/>
				</Link>
				<CardFrontContent
					title={project.title}
					shortDesc={project.shortDesc}
				/>
				<Actions
					flipCard={flipCard}
					flipBtn={<FlipToBackIcon />}
					code={project.codeLink}
					live={project.liveLink}
				/>
			</Card>
			{/* FRONT of card */}

			{/* BACK of card */}
			<Card className={classes.root} data-testid="flipping-card-back">
				<CardBackContent
					accomplishments={project.accomplishments}
					techUsed={project.techUsed}
				/>
				<Actions
					flipCard={flipCard}
					flipBtn={<FlipToFrontIcon />}
					code={project.codeLink}
					live={project.liveLink}
				/>
			</Card>
			{/* BACK of card */}
		</ReactCardFlip>
	);
}

export default ProjectCard;
