import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from "@mui/material/Typography";
import './Resume.css'

export default function OppositeContentTimeline() {
    return (
        <React.Fragment>
            <div className="ResumeBody">
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                >
                    <h1 className="ResumeTitle">Resume</h1>
                    <TimelineItem>
                        <TimelineOppositeContent color="black" className="Portfolio">
                            Student
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography  component="span" color="black" className="Portfolio">
                                2016-2020
                            </Typography>
                            <Typography  component="span" style={{padding:"5px"}} className="Portfolio">
                                Study at Yanka Kupala State University of Grodno
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="black" className="Portfolio">
                            Student
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography  component="span" color="black" className="Portfolio">
                                2019
                            </Typography>
                            <Typography  component="span" style={{padding:"5px"}} className="Portfolio">
                                Attended Congniteq courses on React
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent color="black" className="Portfolio">
                            Programmer
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography  component="span" color="black" className="Portfolio">
                                2020-now
                            </Typography>
                            <Typography  component="span" style={{padding:"5px"}} className="Portfolio">
                                Work with ERP 1C. I develop 1С software for the company. But sometimes I support users.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </React.Fragment>
    );
}
