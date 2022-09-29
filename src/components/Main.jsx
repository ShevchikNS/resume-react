import React from 'react';
import DrawerAppBar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Work from "./Work";
import ContactPage from "./ContactPage";

const Main = () => {
    return (
        <>
            <DrawerAppBar/>
            <Home/>
            <About/>
            <Skills/>
            <Resume/>
            <Work/>
            <ContactPage/>
        </>
    );
};

export default Main;