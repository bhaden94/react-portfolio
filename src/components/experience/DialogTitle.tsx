import MuiDialogTitle from "@material-ui/core/DialogTitle";
import {
	createStyles,
	Theme,
	withStyles,
	WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: "0px 28px 0px 0px",
			padding: theme.spacing(2),
		},
		closeButton: {
			position: "absolute",
			right: theme.spacing(1),
			top: theme.spacing(1),
			transition: "color 250ms",
			"&:hover": {
				color: theme.palette.secondary.main,
				cursor: "pointer",
			},
		},
	});

interface DialogTitleProps extends WithStyles<typeof styles> {
	id: string;
	children: React.ReactNode;
	handleClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
	const { children, classes, handleClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h5">{children}</Typography>
			<CloseIcon
				className={classes.closeButton}
				onClick={handleClose}
				color="primary"
				fontSize="large"
				data-testid={"close-modal-btn"}
			/>
		</MuiDialogTitle>
	);
});

export default DialogTitle;
