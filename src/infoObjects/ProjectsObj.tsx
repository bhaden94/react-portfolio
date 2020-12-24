import { Icon } from "@icons-pack/react-simple-icons";
import { SkillsObj, SkillsObject } from "./SkillsObj";

export interface ProjectObj {
    media: string
    title: string
    shortDesc: string
    longDesc: string
    liveLink: string
    codeLink: string
    techUsed: Icon[]
}

export function ProjectObject(): ProjectObj[] {

    const skills: SkillsObj = SkillsObject()

    return [
        {
            media: 'link to picture to be used for card',
            title: 'title',
            shortDesc: 'short desc',
            longDesc: 'long desc',
            liveLink: 'link to live app',
            codeLink: 'link to github',
            techUsed: [skills.docker, skills.spring]
        },
        {
            media: 'link to picture to be used for card',
            title: 'title',
            shortDesc: 'short desc',
            longDesc: 'long desc',
            liveLink: 'link to live app',
            codeLink: 'link to github',
            techUsed: [skills.react, skills.github]
        },
    ];
}