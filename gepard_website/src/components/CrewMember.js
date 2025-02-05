import React from "react";

// eslint-disable-next-line react/prop-types
export default function CrewMember({first_last_name, description})
{
    return(
        <div className="flex flex-col items-center justify-center text-center p-4">
            <img src="/png/person.png" className="h-80" alt="employee_photo"></img>
            <p className="text-xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 font-poppins pt-4 pb-1">{first_last_name}</p>
            <p className="text-md md:text-lg text-zinc-700 dark:text-zinc-400 font-poppins">{description}</p>
        </div>
    );
}
