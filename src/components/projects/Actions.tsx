import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles({
	actions: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: "50px",
	},
});

interface IActions {
	flipCard: () => void;
	flipBtn: any;
	code: string | undefined;
	live: string | undefined;
}

function Actions({ flipCard, flipBtn, code, live }: IActions) {
	const classes = useStyles();

	return (
		<CardActions className={classes.actions}>
			<Grid container justify="space-between">
				<Grid item>
					{code && (
						<Tooltip
							title="Code"
							placement="bottom"
							enterDelay={250}
							arrow
						>
							<Button
								href={code}
								size="small"
								color="primary"
								target="_blank"
								rel="noreferrer"
							>
								<GitHubIcon />
							</Button>
						</Tooltip>
					)}
					{live && (
						<Tooltip
							title="Live Application"
							placement="bottom"
							enterDelay={250}
							arrow
						>
							<Button
								href={live}
								size="small"
								color="primary"
								target="_blank"
								rel="noreferrer"
							>
								<LinkIcon />
							</Button>
						</Tooltip>
					)}
				</Grid>
				<Grid item>
					<Button
						onClick={flipCard}
						size="small"
						color="secondary"
						aria-label="Flip project card"
						data-testid="card-flip-btn"
					>
						{flipBtn}
					</Button>
				</Grid>
			</Grid>
		</CardActions>
	);
}

export default Actions;
