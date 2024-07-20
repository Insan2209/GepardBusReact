import React from "react";

function Contact () {
    return (
    <>
        <div className="flex flex-wrap justify-center my-12 mx-2 xl:my-auto">
            <div className="w-full xl:w-3/5 block space-y-8 text-center justify-center">
                <p className="text-2xl xl:text-4xl font-semibold text-zinc-700 font-poppins">Masz jakieś <span className="text-cocoa_brown">skargi</span> lub <span className="text-cocoa_brown">uwagi</span>? Chciałbyś zadać nam <span className="text-cocoa_brown">pytanie</span>? A może podzielić się z nami swoim <span className="text-cocoa_brown">pomysłem</span>?</p>
                <p className="text-xl xl:text-3xl text-zinc-700 font-poppins">Skontaktuj się z nami! Z chęcią wysłuchamy sugestii odnośnie połączeń, rozkładu i jego szczegółów.</p>
                <p className="text-lg xl:text-xl text-zinc-700 font-poppins">E-mail: <span className="text-cocoa_brown font-semibold">gepardbus@interia.pl</span></p>
                <p className="text-lg xl:text-xl text-zinc-700 font-poppins">Telefon: <span className="text-cocoa_brown font-semibold">502 593 761</span></p>
                <p className="text-lg xl:text-xl text-zinc-700 font-poppins">Adres korespondencyjny: <span className="text-cocoa_brown font-semibold">F.H.U. „GEPARD” Grzegorz Latkowski <br/>Ul. Sitkówka 124a 26-060 Chęciny</span></p>  
                <p className="text-lg xl:text-xl text-zinc-700 font-poppins">Jesteśmy dla was dostępni w godzinach: <span className="text-cocoa_brown font-semibold"><br/>Poniedziałek - Piątek:</span><span className="font-semibold"> 8:00 - 18:00</span><span className="text-cocoa_brown font-semibold"><br/>Sobota:</span><span className="font-semibold"> 9:00 - 15:00</span></p>        
            </div>
        </div>
    </>
    );
}

export default Contact; 