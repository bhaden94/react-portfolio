import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import { useChangeTheme } from '../../theme';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '5px 0 15px 0'
        },
        icon: {
            color: theme.palette.secondary.main,
            transition: 'color 250ms',
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
        <div className={classes.container}>
            {theme.palette.type === 'light' ?
                <Brightness7Icon onClick={changeTheme} fontSize='large' className={classes.icon} /> :
                <Brightness4Icon onClick={changeTheme} fontSize='large' className={classes.icon} />
            }
        </div>
    );
}
