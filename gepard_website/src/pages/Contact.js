import React from "react";

function Contact () {
    return (
    <>
        <div className="grid grid-rows-3 grid-cols-3 grid-flow-row gap-4 bg-yellow-200">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 bg-red-200">Div z numerem 1</div>
            <div className="col-start-2 col-end-4 row-start-1 row-end-4 bg-red-300">Div z numerem 2</div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 bg-blue-200">Div z numerem 3</div>
            <div className="col-start-2 col-end-4 row-start-1 row-end-4 bg-blue-300">Div z numerem 4</div>
            <div className="col-start-1 col-end-1 row-start-3 row-end-3 bg-green-200">Div z numerem 5</div>
            <div className="col-start-2 col-end-4 row-start-1 row-end-4 bg-green-300">Div z numerem 6</div>
        </div>
    </>
    );
}

export default Contact; 