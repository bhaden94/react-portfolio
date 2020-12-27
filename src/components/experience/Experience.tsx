import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import {
    ExperienceObject,
    ExperienceObj,
} from "../../infoObjects/ExperienceObj";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "6px 16px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function Experience() {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const experience: ExperienceObj[] = ExperienceObject();

    // format the start and end dates of projects
    // also checks if the end date is a string, like 'present' and uses that if it is
    const formatDate = (start: Date, end: Date | string): string => {
        const startDate: string = start.toLocaleDateString('default', { month: 'short', year: 'numeric' })
        let endDate: string
        if(end instanceof Date) {
            endDate = end.toLocaleDateString('default', { month: 'short', year: 'numeric' })
        } else {
            endDate = end
        }
        return (
            `${startDate} - ${endDate}`
        )
    }

    return (
        <VerticalTimeline animate={isDesktop ? true : false}>
            {experience.map((job: ExperienceObj) => {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme.palette.background.paper,
                            color: theme.palette.text.secondary,
                        }}
                        contentArrowStyle={{
                            borderRight: `7px solid ${theme.palette.background.paper}`,
                        }}
                        date={formatDate(job.startDate, job.endDate)}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<AcUnitIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {job.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            {job.company}
                        </h4>
                        {job.bullets.map((bullet: string) => {
                            return <p>{bullet}</p>
                        })}
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
    );
}

export default Experience;
