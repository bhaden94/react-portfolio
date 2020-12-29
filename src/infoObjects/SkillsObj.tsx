import {
    Docker,
    Spring,
    ReactJs,
    Angular,
    NodeDotJs,
    Git,
    Github,
    Gitlab,
    Mysql,
    Postgresql,
    Mongodb,
    Java,
    Javascript,
    Typescript,
    Sonarqube,
    Jira,
    Grafana,
    Heroku,
    Bootstrap,
    MaterialUi,
    Nginx
} from "@icons-pack/react-simple-icons";

export interface SkillsObj {
    names: string[];
    [key: string]: any;
}

export function SkillsObject(size?: number, color?: string): SkillsObj {
    return {
        names: ["Docker", "Spring"],
        docker: <Docker color={color || "#2496ED"} size={size || 50} />,
        spring: <Spring color={color || "#6DB33F"} size={size || 50} />,
        react: <ReactJs color={color || "#61DBFB"} size={size || 50} />,
        angular: <Angular color={color || "#DD0031"} size={size || 50} />,
        node: <NodeDotJs color={color || "#339933"} size={size || 50} />,
        Git: <Git color={color || "#F05032"} size={size || 50} />,
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
        // get icons from here: https://simpleicons.org/
    };
}
