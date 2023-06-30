import React from "react";
import {VerificRol} from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpPost(){
    const navegate = useNavigate();

    async function Rol(){
        const result = await VerificRol();
        if(result.data[0] == 'profesor'){
           navegate('/post/from'); 
        }else{
            toast('No puedes crear publicaciones',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            })
        }
    }

    return(
        <div className="MainQuiz-Div">
            <h2>¿Crear Publicación?</h2>
            <div>   
                <button onClick={() => Rol()}>Crear</button>
            </div>
        </div>
    );
}

export default UpPost