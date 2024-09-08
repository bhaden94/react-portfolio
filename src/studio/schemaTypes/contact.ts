import { defineField, defineType } from "sanity";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export const ContactIconMap = {
	GitHub: GitHubIcon,
	LinkedIn: LinkedInIcon,
	Email: AlternateEmailIcon,
} as const;

export type TContactIcon = "GitHub" | "LinkedIn" | "Email";

export interface ContactSchema {
	name: string;
	link: string;
	text: string;
	icon: TContactIcon;
}

export default defineType({
	name: "contact",
	title: "Contact",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "string",
		}),
		defineField({
			name: "text",
			title: "Text",
			type: "string",
		}),
		defineField({
			name: "icon",
			title: "Icon",
			type: "string",
			options: {
				list: Object.keys(ContactIconMap),
			},
		}),
	],
});
