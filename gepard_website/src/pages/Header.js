import React, { useEffect } from "react";
import { Link, useLocation, } from "react-router-dom";
import HeaderButton from "../components/HeaderButton.js";

function Header() {

    const button_names = [["O firmie", "AboutUs"],["Rozkład jazdy", "RouteList"],["Nasza załoga", "OurCrew"],["Aktualności", "News"],["Kontakt", "Contact"],["Regulamin", "TermsAndConditions"]];
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
        <nav className="bg-xanthous bg-opacity-75 dark:bg-[#0C0C0C]">
            <div className="flex flex-wrap items-center justify-between mx-auto p-2 xl:justify-center 2xl:justify-between">
                <div>
                    <Link to ="/">
                        <img src="/png/gepard_logo.png" className="h-24 block dark:hidden" alt="Gepard Bus Logo"/>
                    </Link>
                    <Link to ="/">
                        <img src="/png/gepard_logo2.png" className="h-24 hidden dark:block" alt="Gepard Bus Logo"/>
                    </Link>
                </div>
                <button id="toggleBtn" onClick={handleToggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-20 xl:hidden" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full xl:block xl:w-auto pt-3" id="navbar-default">
                    <ul className="font-medium flex flex-col xl:flex-row p-4 space-y-4 xl:space-x-8 xl:space-y-0">
                        <HeaderButton text={button_names[0][0]} page_name={button_names[0][1]}/>
                        <HeaderButton text={button_names[1][0]} page_name={button_names[1][1]}/>
                        <HeaderButton text={button_names[2][0]} page_name={button_names[2][1]}/>
                        <HeaderButton text={button_names[3][0]} page_name={button_names[3][1]}/>
                        <HeaderButton text={button_names[4][0]} page_name={button_names[4][1]}/>
                        <HeaderButton text={button_names[5][0]} page_name={button_names[5][1]}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;