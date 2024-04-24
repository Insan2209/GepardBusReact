import React from "react";

function News () {
    return (
    <>
        <div className="flex flex-wrap justify-between w-full my-auto">
            <div className="flex flex-wrap flex-col space-y-6 md:space-y-28 justify-start my-auto px-8 w-full md:w-1/3">
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Bilety miesięczne</p>
                        <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10 md:hidden"></img>
                        <img src="/png/right_arrow.svg" alt="right arrow" className="ml-4 h-10 hidden md:flex"></img>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Nowości</p>
                        <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10 md:hidden"></img>
                        <img src="/png/right_arrow.svg" alt="right arrow" className="ml-4 h-10 hidden md:flex"></img>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Zorganizowane grupy, wycieczki</p>
                        <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10 md:hidden"></img>
                        <img src="/png/right_arrow.svg" alt="right arrow" className="ml-4 h-10 hidden md:flex"></img>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
            </div>
            <div className="flex flex-wrap w-full md:w-2/4 bg-red-300 mx-8 md:mx-16">
                <p>Bilety miesięczne na miesiąc kwiecień 2024</p>
            </div>
        </div>
    </>
    );
}

export default News; 