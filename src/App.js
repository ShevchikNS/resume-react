import './App.css';
import DrawerAppBar from "./components/Navbar";
import * as React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

function App() {
    return (
        <div className="App">
            <DrawerAppBar/>
            <Home/>
            <About/>
            <Skills/>
            <Resume/>
        </div>
    );
}

export default App;
