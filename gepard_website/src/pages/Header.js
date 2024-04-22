import React, { useEffect } from "react";
import { Link, useLocation, } from "react-router-dom";

function Header() {

    const location = useLocation();

    useEffect(() => {
        const closeMenu = () => {
            const navbar = document.getElementById('navbar-default');
            if (navbar) {
                navbar.classList.add('hidden');
            }
        };

        closeMenu();
    }, [location]);

    const handleToggleMenu = () => {
        const navbar = document.getElementById('navbar-default');
        navbar.classList.toggle('hidden');
    };


    return (
        <>
            <meta charSet="UTF-8" />
            <title>Gepard Bus</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" href="//index.css" />
            <link rel="icon" type="image/x-icon" href="//png/gepard_logo.png" />
            <nav className="bg-slate-50">
                <div className="flex flex-wrap items-center justify-between mx-auto p-2 xl:justify-center 2xl:justify-between">
                    <Link to ="/">
                    <img
                    src="/png/gepard_logo.png"
                    className="h-24"
                    alt="Gepard Bus Logo"
                    />
                    </Link>
                <button
                    id="toggleBtn"
                    onClick={handleToggleMenu}
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
                        <Link
                        to ="/AboutUs"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/ofirmie_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Firma"
                        />
                        O firmie
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link
                        to ="/Schedule"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/rozklad_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Rozkład"
                        />
                        Rozkład jazdy
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link
                        to ="/OurCrew" 
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/zaloga_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Załoga"
                        />
                        Nasza załoga
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link
                        to ="/News"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/aktualnosci_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Aktualności"
                        />
                        Aktualności
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link
                        to ="/Contact"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/kontakt_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Kontakt"
                        />
                        Kontakt
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link
                        to ="/TermsAndConditions"
                        className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                        >
                        <img
                            src="/png/regulamin_pomaranczowe.png"
                            className="w-6 h-6 mr-2"
                            alt="Ikona Regulamin"
                        />
                        Regulamin
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Header;