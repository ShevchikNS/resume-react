import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div>
            <h1 className="TitleSkills">Skills</h1>
            <div className="TableSkills">
                <div className="MySkills">
                    <div className="SingleProgressBar">
                        <p>Html</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>CSS</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>Bootstrap</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                    </div>
                </div>
                <div className="MySkills">
                    <div className="SingleProgressBar">
                        <p>Sass</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>1C</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>Git</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                    </div>
                </div>
                <div className="MySkills">
                    <div className="SingleProgressBar">
                        <p>Javascript</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>React</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                        <p>Redux</p>
                        <div>
                            <div className="ProgressLine"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;