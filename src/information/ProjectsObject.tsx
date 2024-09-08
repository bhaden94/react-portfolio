import covid from "../images/projects/covid-app.png";
import spacex from "../images/projects/spacex-app.png";
import loki from "../images/projects/loki-bot.png";
import vaCalculator from "../images/projects/va-calculator-app.png";
import { ITechnologiesObject, TechnologiesObject } from "./TechnologiesObject";

export interface IProjectObject {
  id: number;
  media: string;
  title: string;
  shortDesc: string; // max 125 characters long, everything else will be cutoff in card
  accomplishments: string[]; // This can be as many bullets as you want, but will show a scroll bar if necesary
  liveLink?: string;
  codeLink?: string;
  techUsed?: ITechnologiesObject[]; // max 9 techologies here for proper display on card
}

/*
	Put your projects in here to be displayed in a grid on the page

	The id field should be unique

	the media field needs to be imported at the top first and then use that as the media object
		note: the pictures should be stored in src/images/projects
	
	The accomplishments field can be as many bullets as you want, but there will be a scroll
	bar if needed. 

	The techUsed field will be limited to the first 9 technologies.
	This is so we don't overflow the card on some screen sizes
		note: go to TechnologiesObj.tsx to modify the list of technologies that are available for use
*/
export function ProjectObject(): IProjectObject[] {
  const tech: ITechnologiesObject = TechnologiesObject(35);

  // make sure projects are in the order you want them displayed
  return [
    {
      id: 0,
      media: vaCalculator,
      title: "VA Calculator",
      shortDesc: "Calculators specific to U.S. Veterans and their benefits.",
      accomplishments: [
        "Dynamic rendering in autofill to speed up location search",
        "No backend needed with NextJS and server side rendering",
      ],
      liveLink: "https://va-calculator.com",
      codeLink: "https://github.com/bhaden94/va-calculator",
      techUsed: [tech.nextJs, tech.typescript, tech.materialui],
    },
    {
      id: 1,
      media: covid,
      title: "Covid-19 Tracker V2",
      shortDesc: "Visualize global key data related to Covid-19 virus.",
      accomplishments: [
        "Java Multi-threaded services for DB population & updating",
        "CI/CD pipeline with GitHub Actions for static code analysis",
        "Algorithms to shape data on FE and BE",
      ],
      liveLink: "https://covid-19-tracker-v2-fe.vercel.app/",
      codeLink: "https://github.com/bhaden94/Covid-19-Tracker-V2",
      techUsed: [
        tech.spring,
        tech.java,
        tech.react,
        tech.typescript,
        tech.materialui,
        tech.mongodb,
        tech.heroku,
      ],
    },
    {
      id: 2,
      media: spacex,
      title: "SpaceX Timeline",
      shortDesc:
        "See milestones, past launches, and the next launch for SpaceX.",
      accomplishments: [
        "React & Bootstrap to visualize data about SpaceX launches",
        "Custom responsive sidebar component",
        "One of a kind vertical timeline pagination!",
      ],
      liveLink: "https://bhaden94.github.io/spacex-app/",
      codeLink: "https://github.com/bhaden94/spacex-app",
      techUsed: [tech.react, tech.javascript, tech.bootstrap, tech.github],
    },
    {
      id: 3,
      media: loki,
      title: "Loki Discord Chat Bot",
      shortDesc:
        "Trained chat bot to act like everyone's favorite Marvel character, Loki.",
      accomplishments: [
        "Microsoft GPT-2 & Jupyter Notebooks workflows to train/upload bot",
        "Python for sanitizing raw transcripts from Loki show & interact with Discord API",
        "Loki bot has been up 99.95% over the last 30 days",
      ],
      liveLink: "https://huggingface.co/bhaden94/LokiDiscordBot-medium",
      codeLink: "https://github.com/bhaden94/LokiDiscordChatbot",
      techUsed: [tech.python, tech.github, tech.jupyter],
    },
  ];
}
