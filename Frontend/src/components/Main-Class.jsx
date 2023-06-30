import React, {useEffect, useState} from "react";
import './styles/Main-Class.css'
import { useNavigate } from "react-router-dom";
import {First} from "../api/class";

function MainClass(){

    const Navigate = useNavigate();

    useEffect(()=>{
        GetClass();
    },[])

    const [Clase, setClase] = useState([]);

    async function GetClass(){
        const result = await First();
        setClase(result.data);
    }

    function DetailsR(id){
        Navigate('/details/'+id);
    }

    return(
        <div className="TableClass">
            {
                Clase.length > 0 ? (   
                    Clase.map((Clase)=>(
                        <div key={Clase.idclase} className="Box-Class" onClick={()=> DetailsR(Clase.idclase)}>
                            <h2>{Clase.titulo}</h2>
                        </div>
                    ))   
                ) : (
                    <div style={{textAlign: "center"}}>
                        <h2>Loading...</h2>
                    </div>
                )                
            }
        </div>
    )
}

export default MainClass

/*

Clase.map((Clase)=>(
    <div key={Clase.IdClase} className="Box-Class" onClick={()=> DetailsR(Clase.IdClase)}>
        <h2>{Clase.Nombre}</h2>
    </div>
))

*/