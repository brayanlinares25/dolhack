import React,{useEffect, useState} from "react";
import "./styles/ClassDetails.css"
import { VscChromeClose } from "react-icons/vsc";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {Details, enrollclass} from "../api/class";
import { toast } from "react-toastify";
import { RiAdminFill } from "react-icons/ri";

function ClassDetails(){

    const Navegate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        Getdetails();
        const exit = document.querySelector('.ExitX'); 
        exit.addEventListener('click',()=>{
            Navegate('/main/user');
        })
    },[])

    async function ClassEn(){
        try {
            const result = await enrollclass(id);
            console.log(result.data);
            toast(result.data,{
                type: "success",
                theme: "dark",
                position: "bottom-right"
            })
            Navegate('/main/user');
        } catch (error) {
            toast('Ocurrio un error',{
                type: "error",
                theme: "dark",
                position: "bottom-right"
            });
        }
    }    

    const [Det, setDet] = useState(
        {
            "titulo":"Loading...",
            "descripcion":"Loading...",
            "fecha_inicio":"yy-mm-dd",
            "fecha_finalizacion":"yy-mm-dd",
            "codnombre":"Loading...",
            "nivnombre":"Facil"
        }
    );

    async function Getdetails(){
        const result = await Details(id);
        setDet( await result.data[0]);
    }

    return(
        <div className="ContenerDetails">
            <div className="DetailsInfo">
                <div className="OrgDetails">
                    <div>
                        <div className="HeaderInfo">
                            <h2>{Det.titulo}</h2>
                            <h1 className="ExitX"><VscChromeClose /></h1>
                        </div>
                        <div>
                            <p>{Det.descripcion}</p>
                        </div>
                        <div>
                            <h2>Tipo de clase</h2>
                        </div>
                        <div className="ClassType">
                            <p>- {Det.codnombre}</p>
                        </div>
                        <div>
                            <h2>Fecha de inicio</h2>
                        </div>
                        <div>
                            <p>{Det.fecha_inicio}</p>
                        </div>
                        <div>
                            <h2>Fecha de finalización</h2>
                        </div>
                        <div>
                            <p>{Det.fecha_finalizacion}</p>
                        </div>
                        <div>
                            <h2>Dirigida por</h2>
                        </div>
                        <div>
                            <p><RiAdminFill style={{position: "relative", top: "2px", color: "var(--Main_Color)"}} /> {Det.nombre} {Det.apellido}</p>
                        </div>
                    </div>
                    <div className="ButtonInscrip">
                        <button onClick={ClassEn}>Inscribirse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassDetails
