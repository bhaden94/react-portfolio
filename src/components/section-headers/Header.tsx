import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			backgroundColor: theme.palette.primary.main,
			width: "100%",
		},
		text: {
			color: "#fff",
			margin: 0,
			padding: "10px 25px",
			textTransform: "uppercase",
			fontWeight: "lighter",
		},
	})
);

interface IHeaderProps {
	text: string;
}

function Header({ text }: IHeaderProps) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h2 className={classes.text}>{text}</h2>
		</div>
	);
}

export default Header;
