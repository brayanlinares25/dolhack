import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function DeleteAll({allDelet}){
    return(
        <div style={{width:"22%"}} className="MainQuiz-Div">
            <h2>¿Eliminar todo?</h2>
            <div>   
                <button style={{background:"brown"}} onClick={()=> allDelet()}><FaRegTrashCan /></button>
            </div>
        </div>
    );
}

export default DeleteAll