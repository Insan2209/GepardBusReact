import React, { useEffect } from "react";
import { useLocation, } from "react-router-dom";

function Toggle() {

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
}
export default Toggle;