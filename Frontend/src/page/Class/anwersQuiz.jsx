import React, { useEffect, useState } from "react";
import "../../components/styles/anwersQuiz.css";
import { useNavigate, useParams } from "react-router-dom";
import {getQuest, anwersQ, InfoQuiz} from "../../api/quiz";
import { toast } from "react-toastify";

function AnwersQuiz(){

    const [Quie, setQuie] = useState([]);

    const [Rest, setRest] = useState(null);

    const [A, setA] = useState({});

    const Navegate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
       GetQuestion(); 
    },[]);

    async function GetQuestion(){
        const result = await getQuest(id);
        const {data} = await InfoQuiz(id);
        setQuie(result.data);
        setA(data[0]);
    }

    const changer = ({target: {name, value}}) =>{
        setRest({...Rest, [name]: value})
    }

    const handleDelete = async (key) => {
        try {
            const result = await anwersQ(key, Rest);
            toast('respuesta enviada',{
                theme: "dark",
                position: "bottom-right",
                type: "success"
            });
            const updatedItems = Quie.filter((Quie) => Quie.idpregunta !== key);
            setQuie(updatedItems);
        } catch (error) {
            toast(error.response.data,{
                theme: "dark",
                position: "bottom-right",
                type: "warning"
            });
        }
    };

    return(
        <div className="ContenerAnwers-Quiz">
            <div className="Anwers-Quiz">
                <div className="InfoQuiz_anwers">
                    <h2>{A.titulo}</h2>
                    <p>{A.descripcion}</p>
                </div>
                {
                    Quie.map((Quie, i)=>(
                        <div key={Quie.idpregunta} className="AnwerdQuiz-div">
                            <h3>{i+1}. {Quie.pregunta}</h3>
                            <input type="text" name="respuesta" required onChange={changer}/>
                            <div>
                                <button onClick={()=> handleDelete(Quie.idpregunta)}>Enviar respuesta</button>
                            </div>
                        </div>
                    ))
                }
                <div className="Button-Anwers">
                    <button onClick={()=> Navegate('/class/main')}>Terminar examen</button>
                </div>
            </div>
        </div>
    );
}

export default AnwersQuiz