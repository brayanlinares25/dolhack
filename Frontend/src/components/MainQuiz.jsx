import React from "react";
import "./styles/MainQuiz.css";
import {VerificRol} from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MainQuiz(){

    const navegate = useNavigate();

    async function Rol(){
        const result = await VerificRol();
        if(result.data[0] == 'profesor'){
           navegate('/quiz/from'); 
        }else{
            toast('No puedes crear quiz',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            })
        }
    }

    return(
        <div className="MainQuiz-Div">
            <h2>¿Crear Quiz?</h2>
            <div>   
                <button onClick={() => Rol()}>Crear</button>
            </div>
        </div>
    )
}

export default MainQuiz