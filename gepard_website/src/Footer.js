function Footer() {
    return (
    <>
        <div className="flex flex-wrap flex-col md:flex-row mt-36 items-center justify-between w-full bg-xanthous">
            <div className="flex justify-center items-center w-full">
            <img src={require(".//png/gepard_logo.png")} alt="Gepard bus logo" />
            </div>
            <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-end md:pr-10">
            <p className="text-xl font-semibold text-zinc-700 font-poppins">
                Wpadnij na naszego Facebooka
            </p>
            <a href="#">
                <img
                src={require(".//png/facebook_pomaranczowe.png")}
                className="w-10 h-10 ml-2"
                alt="Facebook Logo"
                />
            </a>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-start md:pl-10">
            <p className="text-xl font-semibold text-zinc-700 font-poppins">
                Odwiedź nas na Instagramie
            </p>
            <a href="#">
                <img
                src={require(".//png/instagram_pomaranczowe.png")}
                className="w-10 h-10 ml-2"
                alt="Instagram Logo"
                />
            </a>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full mt-12 md:mt-2">
            <p className="text-sm text-zinc-700 font-poppins">
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