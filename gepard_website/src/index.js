import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import RouteList from "./pages/RouteList";
import StopList from "./pages/StopList";
import Schedule from "./pages/Schedule";
import OurCrew from "./pages/OurCrew";
import News from "./pages/News";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <div class="flex flex-col min-h-screen">
        <Header />
          <Routes>
            <Route path="/" element={ <MainPage />}></Route>
            <Route path="/AboutUs" element={ <AboutUs />}></Route>
            <Route exact path="/RouteList" element={ <RouteList />}></Route>
            <Route exact path="/RouteList/:routeId" element={ <StopList/>}></Route>
            <Route exact path="/RouteList/:routeId/stops/:stopId" element={ <Schedule/>}></Route>
            <Route path="/OurCrew" element={ <OurCrew />}></Route>
            <Route path="/News" element={ <News />}></Route>
            <Route path="/Contact" element={ <Contact />}></Route>
            <Route path="/TermsAndConditions" element={ <TermsAndConditions />}></Route>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>,
);

reportWebVitals();
