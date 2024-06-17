import { PropsWithChildren } from "react";

declare module "@material-ui/core" {
	export interface HiddenProps extends PropsWithChildren {}
}

declare module "react-vertical-timeline-component" {
	export interface VerticalTimelineProps extends PropsWithChildren {}
	export interface VerticalTimelineElementProps extends PropsWithChildren {}
}
