import React from "react";

function Footer() {
    return (
    <>
        <div className="flex flex-wrap flex-col md:flex-row md:mt-auto items-center justify-between w-full bg-xanthous dark:bg-gradient-to-t dark:from-neutral-950 dark:to-neutral-800">
            <div className="flex justify-center items-center w-full">
                <div>
                    <img src="/png/gepard_logo.png" alt="Gepard bus logo" className="block dark:hidden" />
                    <img src="/png/gepard_logo2.png" alt="Gepard bus logo" className="hidden dark:block" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-end md:pr-10">
            <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-400 font-poppins">
                Wpadnij na naszego Facebooka
            </p>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img
                src="/png/facebook_pomaranczowe.png"
                className="w-10 h-10 ml-2"
                alt="Facebook Logo"
                />
            </a>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-start md:pl-10">
            <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-400 font-poppins">
                Odwiedź nas na Instagramie
            </p>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img
                src="/png/instagram_pomaranczowe.png"
                className="w-10 h-10 ml-2"
                alt="Instagram Logo"
                />
            </a>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full mt-12 md:mt-2">
            <p className="text-sm text-zinc-700 dark:text-zinc-400 font-poppins">
                Icons by{" "}
                <a href="icons8.com" target="_blank">
                Icons8
                </a>
            </p>
            </div>
        </div>
    </>
    );
}

export default Footer;