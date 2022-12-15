import React from 'react';
import './styles/About.css'
const About = () => {
    const stack = ['Javascript', 'React', 'Redux', 'NextJs', 'Angular', 'Typescript', 'Git', '1C', 'HTML', 'CSS', 'Bootstrap']
    return (
        <div className="AboutMe" id="About">
            <h1 className="AboutTitle">About Me</h1>
            <p className="AboutTitle2">
                I graduated from Yanka Kupala Grodno State University, Faculty of Mathematics and Informatics.
                When I was studying, I completed React courses in Cogniteq.
                After graduating from university, I got a job as a software engineer at Khimvolokno.
                From January 2022 to April 2022, I took React courses from Intexsoft. At the moment I am developing and supporting programs in the 1C language,
                advising users on the ERP system, writing instructions for the 1C system, and also compiling reports on the errors found.
                At the same time, I continue to study React and other technologies.
            </p>
            <ul>
                {stack.map((el) => <li key={el}>{el}</li>)}
            </ul>
        </div>
    );
};

export default About;