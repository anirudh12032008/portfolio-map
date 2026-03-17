// had to do this to fix vercel error

declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    children?: React.ReactNode;
    animate?: boolean;
    className?: string;
    layout?: "1-column-left" | "1-column" | "2-columns";
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: React.ReactNode;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    iconClassName?: string;
    icon?: React.ReactNode;
    position?: "left" | "right";
    visible?: boolean;
  }

  export const VerticalTimeline: React.ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.ComponentType<VerticalTimelineElementProps>;
}