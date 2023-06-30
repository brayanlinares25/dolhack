import React,{useEffect, useState} from "react";
import Img from '../assets/Icon.png'
import { Link, useNavigate } from "react-router-dom";
import './styles/NavigationUser.css'
import { ProfileR } from "../api/profile";
import {Logout} from "../api/auth";

function NavigationUser(){

    const Navigate = useNavigate();

    const [Pro, setPro] = useState({});

    useEffect(()=>{
        GetProfile();
    },[]);

    async function GetProfile(){
        const result = await ProfileR();
        setPro(result.data[0]);
    }

    async function Exit(){
        await Logout();
        Navigate('/');
    }

    return(
        <header className="headerUser">
            <div className="Banner">
                <div style={{cursor:"pointer"}} className="Dlogo" onClick={()=> Navigate('/main/user')}>
                   <img src={Img} alt="" /> 
                </div>
                <input type="text" name="search" id="search" placeholder="Buscar Clases..." />
            </div>
            <h2 className="Profesorbeta" >{Pro.rol}</h2>
            <div className="ProfileNav" >
                <Link> <h2>{Pro.nombre} {Pro.apellido}</h2> </Link>
                <ul className="FolterM" >
                    <Link to={'/main/user/profile'}>Perfil</Link>
                    <Link onClick={()=> Exit()} >Cerrar sesión</Link>
                </ul>
            </div>
        </header>
    )
}

export default NavigationUser