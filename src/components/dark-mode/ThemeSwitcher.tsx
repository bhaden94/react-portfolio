import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import { useChangeTheme } from '../../theme';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.secondary.main,
            '&:hover': {
                color: theme.palette.primary.main,
                cursor: 'pointer'
            }
        }
    }),
);

export default function ThemeSwitcher() {

    const changeTheme = useChangeTheme();
    const theme = useTheme();
    const classes = useStyles();

    return (
        <IconButton aria-label="dark mode" onClick={changeTheme}>
            {theme.palette.type === 'light' ?
                <Brightness7Icon fontSize='large' className={classes.icon} /> :
                <Brightness4Icon fontSize='large' className={classes.icon} />
            }
        </IconButton>
    );
}
