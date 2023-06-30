import React from "react";
import "./styles/Big-Title.css"

function BigTitle({Descripcion, Title}){
    return(
        <div className="BigTitle">
            <h1>{Title}</h1>
            <p>{Descripcion}</p>
        </div>
    )
}

export default BigTitle