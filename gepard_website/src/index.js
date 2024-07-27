import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage.js";
import AboutUs from "./pages/AboutUs.js";
import RouteList from "./pages/RouteList.js";
import StopList from "./pages/StopList.js";
import Schedule from "./pages/Schedule.js";
import OurCrew from "./pages/OurCrew.js";
import News from "./pages/News.js";
import Contact from "./pages/Contact.js";
import TermsAndConditions from "./pages/TermsAndConditions.js";
import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-zinc-200 dark:bg-neutral-800">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/RouteList" element={<RouteList />} />
                <Route path="/RouteList/:routeId" element={<StopList />} />
                <Route path="/RouteList/:routeId/StopList/:stopId" element={<Schedule />} />
                <Route path="/OurCrew" element={<OurCrew />} />
                <Route path="/News" element={<News />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
);


reportWebVitals();
