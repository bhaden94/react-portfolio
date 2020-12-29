import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
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

export default Actions;
