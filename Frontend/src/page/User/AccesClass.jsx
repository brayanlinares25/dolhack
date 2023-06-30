import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {catchData} from "../../api/class";
import "../../components/styles/AccesClass.css"

function AccesClass(){

    const navegate = useNavigate();

    const [Data, setData] = useState({});    

    useEffect(()=>{
        GetData();
        document.body.classList.add('Backgrund-AccesClass');
        return () => {
            document.body.classList.remove('Backgrund-AccesClass');
        }
    },[]);

    function Navega(){
        navegate('/class/main');    
    }

    async function GetData(){
        const result = await catchData();
        setData(result.data[0]);
    }

    return(
        <div className="Acces-Class">
            <h2>Bienvenido {Data.nombre}</h2>
            <p>Tu rol en esta clase es {Data.rol}</p>
            <div>
                <button onClick={() => Navega()}>Entrar</button>
            </div>
        </div>
    )
}

export default AccesClass;