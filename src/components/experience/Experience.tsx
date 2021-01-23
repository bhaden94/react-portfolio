import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Theme } from "@material-ui/core/styles";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
	ExperienceObject,
	ExperienceObj,
} from "../../infoObjects/ExperienceObj";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
	customTimeline: {
		"&::before": {
			background: theme.palette.primary.main,
		},
	},
	title: {
		fontSize: "1.75rem !important",
		margin: "0px !important",
	},
	company: {
		fontSize: "1.2rem !important",
		margin: "0px 0px 10px !important",
		padding: "10px 0",
	},
	bullets: {
		listStyle: "inside",
		padding: 0,
		fontSize: "1rem",
		"& li": {
			marginTop: "15px",
			color: theme.palette.text.secondary,
		},
	},
	desc: {
		margin: "0px 0px 20px !important",
	},
	btn: {
		display: "inline-block",
		[theme.breakpoints.down(1170)]: {
			float: "right",
		},
	},
}));

function Experience() {
	const classes = useStyles();
	const theme = useTheme();
	const experience: ExperienceObj[] = ExperienceObject();

	// format the start and end dates of projects
	// also checks if the end date is a string, like 'present' and uses that if it is
	const formatDate = (start: Date, end: Date | string): string => {
		const startDate: string = start.toLocaleDateString("default", {
			month: "short",
			year: "numeric",
		});
		let endDate: string;
		if (end instanceof Date) {
			endDate = end.toLocaleDateString("default", {
				month: "short",
				year: "numeric",
			});
		} else {
			endDate = end;
		}
		return `${startDate} - ${endDate}`;
	};

	const content = {
		background: theme.palette.background.paper,
		color: theme.palette.primary.main,
		borderTop: `3px solid ${theme.palette.secondary.main}`,
		boxShadow: `0 8px 6px -6px rgba(0, 0, 0, 0.4)`,
	};

	const arrowStyle = {
		borderRight: `7px solid ${theme.palette.background.paper}`,
	};

	const iconStyle = {
		background: "#fff",
		boxShadow: `none`,
	};

	return (
		<VerticalTimeline className={classes.customTimeline} animate={false}>
			{experience.map((job: ExperienceObj, i: number) => (
				<VerticalTimelineElement
					key={i}
					className="vertical-timeline-element--work"
					contentStyle={content}
					contentArrowStyle={arrowStyle}
					date={formatDate(job.startDate, job.endDate)}
					iconStyle={iconStyle}
					icon={job.media}
				>
					<Typography
						color="textPrimary"
						variant="h3"
						className={classes.title}
					>
						{job.title}
					</Typography>
					<Typography
						color="textPrimary"
						variant="h4"
						className={classes.company}
					>
						{job.company}
					</Typography>
					{job.description && (
						<Typography
							color="textSecondary"
							className={classes.desc}
						>
							{job.description}
						</Typography>
					)}
					<Button
						variant="contained"
						color="primary"
						className={classes.btn}
					>
						Details
					</Button>
					{/* <ul className={classes.bullets}>
						{job.bullets.map((bullet: string, i: number) => (
							<li key={i}>{bullet}</li>
						))}
					</ul> */}
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}

export default Experience;
