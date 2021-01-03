import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface IHeaderProps {
	text: string;
}

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

function Header({ text }: IHeaderProps) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h2 className={classes.text}>{text}</h2>
		</div>
	);
}

export default Header;
