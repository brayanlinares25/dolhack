import React,{useEffect, useState} from "react";
import "./styles/ProfileDetails.css";
import { ProfileR } from "../api/profile";
import { ImWhatsapp,ImGoogle, ImParagraphCenter, ImUser, ImPacman } from "react-icons/im";
import {useNavigate} from "react-router-dom";

function ProfileDetails(){

    const Navegate = useNavigate();

    useEffect(()=>{
        GetProfile();
        document.body.classList.add('Backgrund-Profile');
         return () => {
            document.body.classList.remove('Backgrund-Profile')
         }
    },[]);

    const [Pro, setPro] = useState({});

    async function GetProfile(){
        const result = await ProfileR();
        console.log(result.data[0]);
        setPro(result.data[0]);
    }

    return(
        <div className="Profile-Render">
            <div className="Profile-Orden">
                <div className="Profile-Info">
                    <div>
                        <h2><samp><ImUser /></samp> {Pro.nombre} {Pro.apellido}</h2>
                    </div>
                    <div className="IMG">
                        <img src={Pro.img} />
                    </div>
                    <div className="Biografía">
                        <p><samp><ImParagraphCenter /></samp> {Pro.biografia}</p>
                    </div>
                    <div>
                        <h2><samp><ImGoogle /></samp> {Pro.correo}</h2>
                    </div>
                    <div>
                        <h2><samp><ImWhatsapp /></samp> {Pro.numero}</h2>
                    </div>
                    <div>
                        <h2><samp><ImPacman /></samp> {Pro.rol}</h2>
                    </div>
                </div>
                <div className="Profile-Actual-Elimi">
                    <button onClick={()=>Navegate('/main/user/profile/update')} >Actualizar</button>
                    <button className="Profile-Eliminar">Eliminar</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileDetails
