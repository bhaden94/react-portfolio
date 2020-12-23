import { Docker, Spring, ReactJs } from '@icons-pack/react-simple-icons';

export interface SkillsObj {
    names: string[]
    [key: string]: any
}

export function SkillsObject(size?: number, color?: string) {

    return (
        {
            names: ['Docker', 'Spring'],
            docker: <Docker color={color || '#2496ED'} size={size || 50} />,
            spring: <Spring color={color || "#6DB33F"} size={size || 50} />,
            react: <ReactJs color={color || "#61DBFB"} size={size || 50} />
            // get icons from here: https://simpleicons.org/
        }
    )
}
