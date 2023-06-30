import React,{useEffect, useState} from "react";
import './styles/font/FontAnonymice.css'
import './styles/Navigation.css'
import Img from '../assets/Icon.png'
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <header>
            <div className="Banner">
                <div className="Dlogo">
                   <img src={Img} alt="" /> 
                </div>
                <h2 className="Logo">DolHack</h2>
            </div>
            <nav className="Navigation-Home">
                <ul><Link to={'/'}>Inicio</Link></ul>
                <ul><Link to={'/information'}>Información</Link></ul>
                <ul><Link to={'/services'}>Servicios</Link></ul>
            </nav>
            <Link to={'/login'}><button className="Button-Login">Iniciar</button></Link>
        </header>
    )
}

export default Navigation
