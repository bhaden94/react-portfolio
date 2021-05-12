import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function CardFrontContent({ title, shortDesc }: any) {
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
