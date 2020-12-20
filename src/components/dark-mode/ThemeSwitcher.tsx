import React from 'react';
import './theme.css'
import useTheme from '@material-ui/core/styles/useTheme';
import { useChangeTheme } from '../../theme';



export default function ThemeSwitcher() {

    const changeTheme = useChangeTheme();
    const theme = useTheme();
    const checked = theme.palette.type === 'light'

    return (
        <input
            type="checkbox"
            name="checkbox"
            className="switch"
            onChange={changeTheme}
            checked={checked}
        />
    );
}
