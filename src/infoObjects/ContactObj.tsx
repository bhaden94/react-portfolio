export interface ContactObj {
    github: string;
    linkedin: string;
    email: string;
}

export function ContactObject(): ContactObj {
    return {
        github: 'https://github.com/bhaden94',
        linkedin: 'https://www.linkedin.com/in/brady-haden/',
        email: 'mailto:brady.s.haden@gmail.com?subject=Greetings From Portfolio',
    };
}