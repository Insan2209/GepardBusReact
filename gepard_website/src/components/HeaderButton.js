import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function HeaderButton({text, page_name})
{
    return(
        <li className="flex items-center">
            <Link to ={"/"+page_name} 
                className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto rounded text-gray-900 
                dark:text-zinc-300 hover:bg-gray-300 dark:hover:bg-zinc-700 xl:hover:bg-transparent 
                dark:xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange">
                <img src={"/png/"+text+".png"} className="w-6 h-6 mr-2" alt={"Ikona "+text}/>
                {text}
            </Link>
        </li>
    );
}
