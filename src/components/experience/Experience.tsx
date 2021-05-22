import Button from "@material-ui/core/Button";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
	ExperienceObject,
	IExperienceObject,
} from "../../information/ExperienceObject";
import { formatExperienceDate } from "../../utils/formatDate";
import ExperienceModal from "./ExperienceModal";

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
	const experience: IExperienceObject[] = ExperienceObject();
	// open and close state for experience details view
	const [open, setOpen] = useState<boolean>(false);
	// state to keep track of the job we are seeing more details for
	const [currJob, setCurrJob] = useState<IExperienceObject>(experience[0]);

	/* open and close dialog to see more for experience */
	const handleDialogOpen = (i: number) => {
		setCurrJob(experience[i]);
		setOpen(true);
	};

	const handleDialogClose = () => {
		setOpen(false);
	};
	/* end open and close dialog functions */

	/* Vertical timeline specific styles */
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

	const iconImageStyle = {
		width: "100%",
		height: "100%",
		borderRadius: "50%",
	};
	/* end specific styles */

	return (
		<VerticalTimeline className={classes.customTimeline} animate={false}>
			{experience.map((job: IExperienceObject, i: number) => (
				<VerticalTimelineElement
					key={i}
					className="vertical-timeline-element--work"
					contentStyle={content}
					contentArrowStyle={arrowStyle}
					date={formatExperienceDate(job.startDate, job.endDate)}
					iconStyle={iconStyle}
					icon={
						<img
							src={job.media}
							style={iconImageStyle}
							alt={`${job.company} logo`}
							data-testid={`timeline-img-${i}`}
						/>
					}
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
							data-testid={`timeline-description-${i}`}
						>
							{job.description}
						</Typography>
					)}
					<Button
						variant="contained"
						color="primary"
						className={classes.btn}
						onClick={() => handleDialogOpen(i)}
						data-testid="open-modal-btn"
					>
						Details
					</Button>
					<ExperienceModal
						job={currJob}
						open={open}
						handleClose={handleDialogClose}
					/>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}

export default Experience;
