import {
	Amazonaws,
	Angular,
	Bootstrap,
	Csharp,
	CssThree,
	Docker,
	Elasticsearch,
	Git,
	Github,
	Gitlab,
	Grafana,
	Heroku,
	Html5,
	Java,
	Javascript,
	Jira,
	Kibana,
	MaterialUi,
	Mattermost,
	Microsoftazure,
	Mongodb,
	Mysql,
	Nginx,
	NodeDotJs,
	Postgresql,
	Python,
	Rancher,
	ReactJs,
	Sonarqube,
	Spring,
	Typescript
} from "@icons-pack/react-simple-icons";

export interface ITechnologiesObject {
	[key: string]: any;
}

/*
	Update with any other technologies you want to add
	Find more icons here: https://simpleicons.org/
	Import them and utilize the component like all the others below

	Parameters include size and color that will override what is already here
	
	This allows for you to make all icons the same color throughout your portfolio
	if that is what you would like to do.
*/
export function TechnologiesObject(
	size?: number,
	color?: string
): ITechnologiesObject {
	return {
		docker: <Docker color={color || "#2496ED"} size={size || 50} />,
		spring: <Spring color={color || "#6DB33F"} size={size || 50} />,
		react: <ReactJs color={color || "#61DBFB"} size={size || 50} />,
		angular: <Angular color={color || "#DD0031"} size={size || 50} />,
		node: <NodeDotJs color={color || "#339933"} size={size || 50} />,
		git: <Git color={color || "#F05032"} size={size || 50} />,
		github: <Github color={color || "#181717"} size={size || 50} />,
		gitlab: <Gitlab color={color || "#FCA121"} size={size || 50} />,
		mysql: <Mysql color={color || "#4479A1"} size={size || 50} />,
		postgresql: <Postgresql color={color || "#336791"} size={size || 50} />,
		mongodb: <Mongodb color={color || "#47A248"} size={size || 50} />,
		java: <Java color={color || "#007396"} size={size || 50} />,
		javascript: <Javascript color={color || "#F7DF1E"} size={size || 50} />,
		typescript: <Typescript color={color || "#3178C6"} size={size || 50} />,
		sonarqube: <Sonarqube color={color || "#4E9BCD"} size={size || 50} />,
		jira: <Jira color={color || "#0052CC"} size={size || 50} />,
		grafana: <Grafana color={color || "#F46800"} size={size || 50} />,
		heroku: <Heroku color={color || "#430098"} size={size || 50} />,
		bootstrap: <Bootstrap color={color || "#7952B3"} size={size || 50} />,
		nginx: <Nginx color={color || "#269539"} size={size || 50} />,
		materialui: <MaterialUi color={color || "#0081CB"} size={size || 50} />,
		html: <Html5 color={color || "#E34F26"} size={size || 50} />,
		css: <CssThree color={color || "#1572B6"} size={size || 50} />,
		rancher: <Rancher color={color || "#0075A8"} size={size || 50} />,
		mattermost: <Mattermost color={color || "#0072C6"} size={size || 50} />,
		python: <Python color={color || "#3776AB"} size={size || 50} />,
		aws: <Amazonaws color={color || "#146eb4"} size={size || 50} />,
		kibana: <Kibana color={color || "#005571"} size={size || 50} />,
		elasticsearch: (
			<Elasticsearch color={color || "#005571"} size={size || 50} />
		),
		azure: <Microsoftazure color={color || "#0089D6"} size={size || 50} />,
		csharp: <Csharp color={color || "#239120"} size={size || 50} />,
		// get icons from https://simpleicons.org/
	};
}
