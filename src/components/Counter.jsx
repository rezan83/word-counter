import React from "react";

const Counter = ({ content }) => {
    console.log("start and edn white space removed",content.trim())
    console.log("convert to array removing between white space",content.trim().split(" "))
    return (
        <div>
            <h2>Letters: {content.length}</h2>
            <h2>Words: {content.trim().split(" ").length}</h2>
        </div>
    );
};

export default Counter;
