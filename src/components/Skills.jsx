import React from 'react';
import './styles/Skills.css'

const Skills = () => {
    return (
        <div id="Skills">
            <h1 className="TitleSkills">Skills</h1>
            <div className="TitleSkills1">
                <div className="TableSkills">
                    <div className="MySkills">
                        <div className="SingleProgressBar">
                            <p>Javascript</p>
                            <div>
                                <div className="JavascriptProgressLine"></div>
                            </div>
                            <p>React</p>
                            <div>
                                <div className="ReactProgressLine"></div>
                            </div>
                            <p>Redux</p>
                            <div>
                                <div className="ReduxProgressLine"></div>
                            </div>
                        </div>
                    </div>
                    <div className="MySkills">
                        <div className="SingleProgressBar">
                            <p>Html</p>
                            <div>
                                <div className="HtmlProgressLine"></div>
                            </div>
                            <p>CSS</p>
                            <div>
                                <div className="CSSProgressLine"></div>
                            </div>
                            <p>Bootstrap</p>
                            <div>
                                <div className="BootstrapProgressLine"></div>
                            </div>
                        </div>
                    </div>
                    <div className="MySkills">
                        <div className="SingleProgressBar">
                            <p>Sass</p>
                            <div>
                                <div className="SassProgressLine"></div>
                            </div>
                            <p>1C</p>
                            <div>
                                <div className="ProgressLine"></div>
                            </div>
                            <p>Git</p>
                            <div>
                                <div className="GitProgressLine"></div>
                            </div>
                        </div>
                    </div>
                    <div className="MySkills">
                        <div className="SingleProgressBar">
                            <p>Angular</p>
                            <div>
                                <div className="AngularProgressLine"></div>
                            </div>
                            <p>Typescript</p>
                            <div>
                                <div className="TypescriptProgressLine"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Skills;