import Collapse from "@material-ui/core/Collapse";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { IExperienceObject } from "../../information/ExperienceObject";
import DialogTitle from "./DialogTitle";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
	bullets: {
		listStyle: "inside",
		padding: 0,
		fontSize: "1rem",
		"& li": {
			marginTop: "15px",
			color: theme.palette.text.secondary,
		},
	},
	icon: {
		display: "inline",
		padding: "10px",
	},
	techHeader: {
		paddingBottom: 5,
		marginBottom: 15,
		borderBottom: `solid ${theme.palette.text.secondary} 2px`,
		transition: "all 250ms",
		"&:hover": {
			cursor: "pointer",
		},
	},
	expandClose: {
		float: "right",
		transform: "rotate(0deg)",
		transition: "all 250ms",
	},
	expandOpen: {
		float: "right",
		transform: "rotate(180deg)",
		transition: "all 250ms",
	},
	spaceBot: {
		marginBottom: 20,
	},
}));

interface IExperienceModal {
	job: IExperienceObject;
	open: boolean;
	handleClose: () => void;
}

function ExperienceModal({ job, open, handleClose }: IExperienceModal) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<boolean>(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle id="customized-dialog-title" handleClose={handleClose}>
				{job.title}
			</DialogTitle>
			<DialogContent>
				{job.techUsed && (
					<div className={classes.spaceBot}>
						<Typography variant="h6" className={classes.techHeader}>
							Technology Used
						</Typography>
						{job.techUsed.map((tech: any, i: number) => (
							<div
								key={i}
								className={["icon-hover", classes.icon].join(
									" "
								)}
							>
								{tech}
							</div>
						))}
					</div>
				)}
				<Typography
					variant="h6"
					color="textPrimary"
					className={classes.techHeader}
					onClick={handleExpandClick}
					data-testid="expand-acc-btn"
				>
					Accomplishments
					<ExpandMoreIcon
						className={
							expanded ? classes.expandOpen : classes.expandClose
						}
						fontSize="large"
					/>
				</Typography>
				<Collapse
					in={expanded}
					timeout="auto"
					unmountOnExit
					data-testid="exp-expanded-acc"
				>
					<ul className={classes.bullets}>
						{job.bullets.map((bullet: string, i: number) => (
							<li key={i}>{bullet}</li>
						))}
					</ul>
				</Collapse>
			</DialogContent>
		</Dialog>
	);
}

export default ExperienceModal;
