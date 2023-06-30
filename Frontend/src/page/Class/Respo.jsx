import React, { useEffect, useState } from "react";
import {getQuest} from "../../api/quialification";
import { useParams, useNavigate } from "react-router-dom";
import { BiBookAlt, BiMale } from "react-icons/bi";
import {putQuest, postReport} from "../../api/quialification";
import { toast } from "react-toastify";

function Respo(){

    const Navegate = useNavigate();

    const {student, quiz} = useParams();

    const [Result, setResult] = useState([]);

    const [Env, setEnv] = useState({});

    useEffect(()=>{
       GetRe(); 
    },{})

    async function GetRe(){
        const result = await getQuest(student, quiz);
        console.log(result.data);
        setResult(result.data);
    }

    const changer = ({target: {name, value}}) =>{
        setEnv({...Env, [name]: value})
    }

    async function Nota(id){
        await putQuest(id, Env);
    }

    async function Calif(){
        await postReport(student, quiz, Env);
        toast('Se a guardado la calificación',{
            theme: "dark",
            position: "bottom-right",
            type: "success"
        });
        Navegate('/class/main')
    }

    return(
        <div className="ContenerAnwers-Quiz">
            <div className="Anwers-Quiz">
                   {
                    Result.map((Result, i)=>(
                        <div key={i}  className="AnwerdQuiz-div">
                            <h3 style={{color: "var(--Main_Color)"}} > <samp style={{position:"relative", top: "3px"}} ><BiBookAlt /></samp> {Result.pregunta}</h3>
                            <h3></h3>
                            <h3> <samp style={{position:"relative", top: "3px"}} ><BiMale /></samp> {Result.respuesta}</h3>
                            <input type="text" name="nota" required onChange={changer} />
                            <div>
                                <button onClick={()=>Nota(Result.idrespuesta)}>Calificar</button>
                            </div>
                        </div>
                    ))
                   }
                <div className="AnwerdQuiz-div">
                   <h3>Nota final</h3>
                   <input type="text" required onChange={changer} name="calificacion"/>
                </div> 
                <div className="Button-Anwers">
                    <button onClick={()=> Calif()}>Terminar</button>
                </div>
            </div>
        </div>
    )
}

export default Respo