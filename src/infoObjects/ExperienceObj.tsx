export interface ExperienceObj {
    startDate: Date;
    endDate: Date | string;
    title: string;
    company: string;
    bullets: string[];
    media: string;
}

export function ExperienceObject(): ExperienceObj[] {

    // put experience objects in the order that they should display on the page
    return [
        {
            startDate: new Date(2020, 8, 28),
            endDate: 'Present',
            title: 'job title',
            company: 'company',
            bullets: ['bullet1', 'bullet2'],
            media: 'picture link to use as dot on inside of timeline'
        },
        {
            startDate: new Date(2021, 0, 4),
            endDate: new Date(2020, 2, 5),
            title: 'job title',
            company: 'company',
            bullets: ['bullet1', 'bullet2'],
            media: 'picture link to use as dot on inside of timeline'
        },
    ];
}