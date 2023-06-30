import React from "react";
import "./styles/Big-Poster.css"

function BigPoster({link, alt}){
    return(
        <div className="Poster">
            <img src={link} alt={alt} />
        </div>
    )
}

export default BigPoster