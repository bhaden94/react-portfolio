import {
	createStyles,
	makeStyles,
	Theme,
	useTheme
} from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useChangeTheme } from "../../theme";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: "5px 0 15px 0",
		},
		icon: {
			color: theme.palette.secondary.main,
			transition: "color 250ms",
			"&:hover": {
				color: theme.palette.primary.main,
				cursor: "pointer",
			},
		},
	})
);

function ThemeSwitcher() {
	const changeTheme = useChangeTheme();
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{theme.palette.type === "light" ? (
				<Brightness7Icon
					data-testid={theme.palette.type}
					onClick={changeTheme}
					fontSize="large"
					className={classes.icon}
				/>
			) : (
				<Brightness4Icon
					data-testid={theme.palette.type}
					onClick={changeTheme}
					fontSize="large"
					className={classes.icon}
				/>
			)}
		</div>
	);
}

export default ThemeSwitcher;
