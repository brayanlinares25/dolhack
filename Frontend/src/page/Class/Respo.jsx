import React, { useEffect, useState } from "react";
import {getQuest} from "../../api/quialification";
import { useParams, useNavigate } from "react-router-dom";

function Respo(){

    const Navegate = useNavigate();

    const {student, quiz} = useParams();

    const [Result, setResult] = useState([]);

    useEffect(()=>{
       GetRe(); 
    },{})

    async function GetRe(){
        const result = await getQuest(student, quiz);
        console.log(result.data);
        setResult(result.data);
    }


    return(
        <div className="ContenerAnwers-Quiz">
            <div className="Anwers-Quiz">
                   {
                    Result.map((Result, i)=>(
                        <div key={i}  className="AnwerdQuiz-div">
                            <h3>{Result.pregunta}</h3>
                            <h3></h3>
                            <h3>{Result.respuesta}</h3>
                            <input type="text" name="calificacion" required/>
                            <div>
                                <button>Calificar</button>
                            </div>
                        </div>
                    ))
                   } 
                <div className="Button-Anwers">
                    <button onClick={()=> Navegate('/class/main')}>Terminar</button>
                </div>
            </div>
        </div>
    )
}

export default Respo