import React from "react";
import {
	createStyles,
	makeStyles,
	Theme,
	withStyles,
	WithStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TransitionProps } from "@material-ui/core/transitions";
import { ExperienceObj } from "../../infoObjects/ExperienceObj";

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
}));

const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: "0px 25px 0px 0px",
			padding: theme.spacing(2),
		},
		closeButton: {
			position: "absolute",
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: theme.palette.grey[500],
		},
	});

interface DialogTitleProps extends WithStyles<typeof styles> {
	id: string;
	children: React.ReactNode;
	onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

interface IExperienceModal {
	job: ExperienceObj;
	open: boolean;
	handleClose: () => void;
}

function ExperienceModal({ job, open, handleClose }: IExperienceModal) {
	const classes = useStyles();

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle id="customized-dialog-title" onClose={handleClose}>
				{job.title}
			</DialogTitle>
			<DialogContent>
				<div>
					{job.techUsed &&
						job.techUsed.map((tech: any, i: number) => (
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
				<DialogContentText id="alert-dialog-slide-description">
					<ul className={classes.bullets}>
						{job.bullets.map((bullet: string, i: number) => (
							<li key={i}>{bullet}</li>
						))}
					</ul>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}

export default ExperienceModal;
