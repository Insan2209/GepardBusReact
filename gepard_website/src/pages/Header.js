import React from "react";
//import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./AboutUs";

function Header() {
    return (
        <Router>
            <meta charSet="UTF-8" />
            <title>Gepard Bus</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" href="//index.css" />
            <link rel="icon" type="image/x-icon" href="//png/gepard_logo.png" />
            <Routes>
            <nav className="bg-slate-100">
                <div className="flex flex-wrap items-center justify-between mx-auto p-2 xl:justify-center 2xl:justify-between">
                <Route path='aboutus' element={<AboutUs />}>
                    <img
                    src={require("//png/gepard_logo.png")}
                    className="h-24"
                    alt="Gepard Bus Logo"
                    />
                </Route>
                <button
                    id="toggleBtn"
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-20"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                    </svg>
                </button>
                <div
                    className="hidden w-full xl:block xl:w-auto pt-3"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col xl:flex-row p-4 space-y-4 xl:space-x-8 xl:space-y-0">
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/ofirmie_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Firma"
                        />
                        O firmie
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/rozklad_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Rozkład"
                        />
                        Rozkład jazdy
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/zaloga_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Załoga"
                        />
                        Nasza załoga
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/bilety_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Bilety"
                        />
                        Rezerwacja biletów
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/aktualnosci_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Aktualności"
                        />
                        Aktualności
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/kontakt_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Kontakt"
                        />
                        Kontakt
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                        href="#"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src={require("//png/regulamin_pomaranczowe.png")}
                            className="w-6 h-6 mr-2"
                            alt="Ikona Regulamin"
                        />
                        Regulamin
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </Routes>
        </Router>
    );
}

export default Header;