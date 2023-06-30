import React from "react";
import { Link } from "react-router-dom";
import "./styles/Button_D.css"

function Button({Text, link}){
    return(
        <div className="Button1" >
            <Link to={link}><button className="ButtonDefault">{Text}</button></Link>
        </div>
    )
    jsflkj
}

export default Button