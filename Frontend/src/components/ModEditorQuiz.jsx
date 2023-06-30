import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {VerificRol} from "../api/auth";

function ModEditor(){

    const navegate = useNavigate();

    async function Rol(){
        const result = await VerificRol();
        if(result.data[0] == 'profesor'){
           navegate('/editor/quiz'); 
        }else{
            toast('No puedes modificar quiz',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            })
        }
    }

    return(
        <div className="MainQuiz-Div">
            <h2>¿Deseas modificar algo?</h2>
            <div>   
                <button onClick={() => Rol()}>Modificar</button>
            </div>
        </div>
    )
}

export default ModEditor