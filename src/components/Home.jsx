import React from 'react';
import logo from "./img/photoComputer.jpg";
import './styles/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from '@mui/material';

const Home = () => {
    return (
        <div className="MainPage" id="Home">
            <div className="bg" >
                <img className="myImg" src={logo} alt="logo"/>
                <h1 className="HomeTitle">Nikolai Shevchik</h1>
                <h2 className="SubTitle">Frontend Developer</h2>
                <div className="HomeIcons">
                    <IconButton href="https://www.linkedin.com/in/nickshev" target="_blank">
                        <LinkedInIcon className="Icon" sx={{color: "white"}}/>
                    </IconButton>
                    <IconButton href="https://github.com/ShevchikNS" target="_blank">
                        <GitHubIcon className="Icon" sx={{color: "white"}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Home;