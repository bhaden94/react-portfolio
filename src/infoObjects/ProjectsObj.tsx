import { SkillsObj, SkillsObject } from "./SkillsObj";

export interface ProjectObj {
    id: number;
    media: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    liveLink: string;
    codeLink: string;
    techUsed: any[];
}

export function ProjectObject(): ProjectObj[] {

    const skills: SkillsObj = SkillsObject()

    // make sure projects are in the order you want them displayed
    return [
        {
            id: 0,
            media: 'link to picture to be used for card',
            title: 'title',
            shortDesc: 'short desc',
            longDesc: 'long desc',
            liveLink: 'link to live app',
            codeLink: 'link to github',
            techUsed: [skills.docker, skills.spring]
        },
        {
            id: 1,
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