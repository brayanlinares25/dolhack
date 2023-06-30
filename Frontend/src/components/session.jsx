import React from "react";
import "./styles/session.css";

function Session({children, descrip}){
    return(
        <>
            <h2 className="z">{descrip}</h2>
            <div className="Session-Home">
               {children} 
            </div>
        </>
    )
}

export default Session