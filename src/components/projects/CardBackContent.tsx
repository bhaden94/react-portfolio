import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ITechnologiesObject } from "../../information/TechnologiesObject";

interface ICardBackContent {
	accomplishments: string[];
	techUsed: ITechnologiesObject[] | undefined;
}

function CardBackContent({ accomplishments, techUsed }: ICardBackContent) {
	const useStyles = makeStyles((theme: Theme) => ({
		icon: {
			display: "inline",
			padding: "10px",
		},
		longDesc: {
			height: techUsed ? "220px" : "340px",
		},
		bullets: {
			listStyle: "inside",
			padding: 0,
			margin: 0,
			fontSize: "1rem",
			maxHeight: techUsed ? "180px" : "340px",
			overflowY: "auto",
			"& li": {
				marginBottom: "8px",
				color: theme.palette.text.secondary,
			},
		},
	}));
	const classes = useStyles();

	return (
		<CardContent>
			<div className={classes.longDesc}>
				<Typography gutterBottom variant="h5" component="h3">
					Accomplishments
				</Typography>
				<ul className={classes.bullets}>
					{accomplishments.map((acc: string, i: number) => (
						<li key={i}>{acc}</li>
					))}
				</ul>
			</div>
			{techUsed && (
				<Typography gutterBottom variant="h6" component="h4">
					Technologies Used
				</Typography>
			)}
			{/* only allow first 9 technologies here so we dont overflow the card  */}
			{techUsed &&
				techUsed.slice(0, 9).map((tech: any, i: number) => (
					<div
						key={i}
						className={["icon-hover", classes.icon].join(" ")}
					>
						{tech}
					</div>
				))}
		</CardContent>
	);
}

export default CardBackContent;
