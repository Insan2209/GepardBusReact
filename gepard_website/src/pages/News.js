import React from "react";

function News () {
    return (
    <>
        <div className="flex flex-wrap flex-col space-y-6 justify-start mt-8 md:mt-16 min-h-[85vw] xl:min-h-[25vw] px-8">
            <div className="w-full md:w-1/3">
                <div className="flex flex-row items-center w-full justify-between">
                    <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-center">Bilety miesięczne</p>
                    <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10"></img>
                </div>
                <hr class="h-px w-full md:w-96 my-2 bg-selective_yellow border-0 block"></hr>
            </div>
            <div className="w-full md:w-1/3">
                <div className="flex flex-row items-center w-full justify-between">
                    <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-center">Aktualności</p>
                    <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10"></img>
                </div>
                <hr class="h-px w-full md:w-96 my-2 bg-selective_yellow border-0 block"></hr>
            </div>
            <div className="w-full md:w-1/3">
                <div className="flex flex-row items-center w-full justify-between">
                    <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-center">Grupy zorganizowane</p>
                    <img src="/png/down_arrow.svg" alt="down arrow" className="ml-4 h-10"></img>
                </div>
                <hr class="h-px w-full md:w-96 my-2 bg-selective_yellow border-0 block"></hr>
            </div>
        </div>
    </>
    );
}

export default News; 