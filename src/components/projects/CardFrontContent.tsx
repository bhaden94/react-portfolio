import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface ICardFrontContent {
	title: string;
	shortDesc: string;
}

function CardFrontContent({ title, shortDesc }: ICardFrontContent) {
	return (
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				{title}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				{shortDesc.substring(0, 125)}
			</Typography>
		</CardContent>
	);
}

export default CardFrontContent;
