import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';

export interface ContactObj {
    link: string;
    text: string;
    icon: any;
}

/*
    Add more social and ways to contact here
    Import the relevant icon from Material-UI above
    Then, add a new object below with link, text, and icon properties
    Make sure the icon property uses the correct import and it has the className of iconClass

    Put the links in the order your want them to show up in the navbar and the contact section
*/
export function ContactObject(iconClass: any): ContactObj[] {
    return [
        {
            link: 'https://github.com/bhaden94',
            text: 'See me on GitHub',
            icon: <GitHubIcon fontSize='large' className={iconClass} />
        },
        {
            link: 'https://www.linkedin.com/in/brady-haden/',
            text: 'Connect on LinkedIn',
            icon: <LinkedInIcon fontSize='large' className={iconClass} />
        },
        {
            link: 'mailto:brady.s.haden@gmail.com?subject=Greetings From Portfolio',
            text: 'Send me an email',
            icon: <AlternateEmailIcon fontSize='large' className={iconClass} />
        },
        // {
        //     link: 'https://www.twitter.com',
        //     text: 'Follow me on Twitter',
        //     icon: <TwitterIcon fontSize='large' className={iconClass} />
        // },
        // {
        //     link: 'https://www.facebook.com',
        //     text: 'Friend me on Facebook',
        //     icon: <FacebookIcon fontSize='large' className={iconClass} />
        // },
    ];
}
