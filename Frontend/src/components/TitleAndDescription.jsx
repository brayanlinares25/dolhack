import React from "react";
import './styles/TitleAndDescription.css'

// Creo un Titulo y descripcion con 2 props para usarlo

export function TitleDescripcion1({Title, Description}){
    return(
        <div className="TitleDescripcion1">
            <h1>{Title}</h1>
            <p>{Description}</p>
        </div>
    )
}

// Creo un Titulo y descripcion con 3 props para modificarlo

export function TitleDescripcion2({Number, Title, Description}){
    return(
        <div className="TitleDescripcion2">
            <div className="ConterTyD">
               <h1>{Number}</h1>
            </div>
            <div className="TitleyDescrip2">
                <div className="Title2">
                    <h2>{Title}</h2>
                    <div className="Line"></div>
                </div>
                <div className="Descrip2">
                   <p>{Description}</p>  
                </div>
            </div>
        </div>
    )
}