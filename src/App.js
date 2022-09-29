import './App.css';
import * as React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import ThankPage from "./components/ThankPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/ThankYou" element={<ThankPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
