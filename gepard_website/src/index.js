import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Content from "./pages/Content";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>,
);

reportWebVitals();
