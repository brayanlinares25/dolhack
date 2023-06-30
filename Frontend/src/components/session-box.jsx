import React from "react";
import "./styles/session-box.css"

function SessionBox({icon, title, descripcion, button}){
    return(
        <div className="Session-Box">
            <h1>{icon}</h1>
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <button>{button}</button>
        </div>
    )
}

export default SessionBox