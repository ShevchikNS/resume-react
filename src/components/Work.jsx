import React from 'react';
import './styles/Work.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import portfolio from "./img/portfolio.png";
import todoProject from "./img/TodoList.png";
import weather from "./img/weather-app.png"

const Work = () => {
    const projects = [
        {
            projectName: 'My Resume',
            imageUrl: portfolio,
            description: 'For React experience, I wrote my resume website.',
            projectLink: 'https://shevchik-resume.netlify.app/'
        },
        {
            projectName: 'TodoList',
            imageUrl: todoProject,
            description: 'Todo list was created on React with using Redux. Firebase database was used to store data.',
            projectLink: 'https://todo-react-redux-6q7sii6ul-shevchikns.vercel.app/signin'
        },
        {
            projectName: 'Weather application',
            imageUrl: weather,
            description: 'Weather application was created on NextJs, React, data scraper (axios and cheerio)',
            projectLink: 'https://azot-weather.vercel.app/'
        }
    ]
    return (
        <div id="Work">
            <h1>Portfolio</h1>
            <div className="ProjectCards">
                {
                    projects.map(project =>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea href = {project.projectLink} target="_blank">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.imageUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.projectName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default Work;