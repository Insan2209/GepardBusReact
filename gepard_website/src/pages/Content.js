import React from "react";
import MainPage from "../pages/MainPage";
import AboutUs from "../pages/AboutUs";
import Schedule from "../pages/Schedule";
import OurCrew from "../pages/OurCrew";
import News from "../pages/News";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";
import { Routes, Route } from "react-router-dom"

function Content () {
    return (
    <Routes>
        <Route exact path="/" element={ <MainPage />}></Route>
        <Route exact path="/AboutUs" element={ <AboutUs />}></Route>
        <Route exact path="/Schedule" element={ <Schedule />}></Route>
        <Route exact path="/OurCrew" element={ <OurCrew />}></Route>
        <Route exact path="/News" element={ <News />}></Route>
        <Route exact path="/Contact" element={ <Contact />}></Route>
        <Route exact path="/TermsAndConditions" element={ <TermsAndConditions />}></Route>
    </Routes>
    );
}

export default Content; 