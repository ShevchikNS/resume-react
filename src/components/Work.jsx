import React from 'react';
import './styles/Work.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import portfolio from "./img/portfolio.png";
import todoProject from "./img/TodoList.png";

const Work = () => {
    return (
        <div id="Work">
            <h1>Portfolio</h1>
            <div className= "ProjectCards">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="https://shevchik-resume.netlify.app/">
                        <CardMedia
                            component="img"
                            height="140"
                            image={portfolio}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                My Resume
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                For React experience, I wrote my resume website.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="https://todo-react-redux-6q7sii6ul-shevchikns.vercel.app/signin">
                        <CardMedia
                            component="img"
                            height="140"
                            image={todoProject}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                TodoList
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                For React experience, I wrote todo list. Todo list was created on React with using Redux.
                                Firebase database was used to store data.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Work;