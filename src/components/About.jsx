import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="AboutMe" id="About">
            <h1 className="AboutTitle">About Me</h1>
            <p className="AboutTitle2">
                About me.I graduated from Yanka Kupala Grodno State University, Faculty of Mathematics and Informatics.
                When I was studying, I completed courses in React at Cogniteq.
                After graduating from university, I got a job as a software engineer at Khimvolokno.
                From January 2022 to April 2022, I took React courses from Intesoft. At the moment I am developing and supporting programs in the 1C language,
                advising users on the ERP system, writing instructions for the 1C system, and also compiling reports on the errors found.
                At the same time, I continue to study React and other technologies.
            </p>
            <ul>
                <li>
                    HTML
                </li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Git</li>
                <li>1C</li>
            </ul>
        </div>
    );
};

export default About;