export interface EducationObj {
	degree: string;
	school: string;
	schoolLink?: string; // optional
	dateFinished?: Date; // optional
	bullets?: string[]; // optional
}

/*
    This is where your edication will go. 
    Put anything here, even free courses you have taken if you want!
    
    Put in order you want to appear on screen

    The link to school, date finished, and bullets are all optional here.
    You can also put in a future date for dateFinished and it will display as an 'Expected' date
*/
export function EducationObject(): EducationObj[] {
	return [
		{
			degree: "Full Stack Software Engineer Bootcamp",
			school: "Galvanize",
			schoolLink: "https://www.galvanize.com/",
			dateFinished: new Date(2020, 9, 0),
			bullets: [
				"Selected from applicant pool of 323 to participate in the first ever Digital Airman Internship Program in the Air Force",
				"Collaborated with other developers on group projects and established a project workflow using Git & GitHub",
			],
		},
		{
			degree: "Bachelor of Science (B.S.) Information Computer Science",
			school: "Park University",
			schoolLink: "https://www.park.edu/",
			dateFinished: new Date(2022, 5, 0),
			bullets: [
				"Tutored 21 students a total of 228 hours in Java and C++ OOP advanced topics, Discrete Math, and Data Structures & Algorithms",
			],
		},
		{
			degree:
				"Associate of Applied Science (AAS) Intelligence Studies and Technology",
			school: "Community College of the Air Force",
			dateFinished: new Date(2020, 8, 0),
		},
		{
			degree:
				"Associate of Applied Science (AAS) Aviation Maintenance Technology",
			school: "Community College of the Air Force",
			dateFinished: new Date(2017, 5, 0),
		},
	];
}
