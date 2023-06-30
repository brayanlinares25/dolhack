import React,{useEffect, useState} from 'react'
import "./styles/QuizCreate.css";
import {postQuiz} from "../api/quiz"
import { useNavigate } from 'react-router-dom';

function QuizCreate() {

    const Navegate = useNavigate();

    const [Env, setEnv] = useState({
        "titulo": "",
        "descripcion": "",
        "calificacion": ""
    });

    useEffect(()=>{
        document.body.classList.add('Backgrund-CreateClass');
         return () => {
            document.body.classList.remove('Backgrund-CreateClass')
         }
    },[]);

    const changer = ({target: {name, value}}) =>{
        setEnv({...Env, [name]: value})
    }

    async function PostQuiz(date){
        const {data} = await postQuiz(date);
        Navegate('/quiz/from/' + data[0].idquiz);
    }

    function Hangle(e){
        e.preventDefault();
        PostQuiz(Env);
    }

  return (
    <div className='QuizCreate-Div'>
        <h1>Formulario de Preguntas</h1>
            <form onSubmit={Hangle}>
                <div>
                    <label>titulo</label>
                    <input type="text" name='titulo' required onChange={changer}/>
                </div>
                <div>
                    <label>descripción</label>
                    <textarea name="descripcion" id="" cols="30" rows="10" onChange={changer}></textarea>
                </div>
                <div>
                    <label>calificación</label>
                    <input type="text" name='calificacion' onChange={changer}/>
                </div>
                <div className='QuizCreate-Button'>
                    <button>Crear Quiz</button>
                </div>
            </form>
        </div>
  )
}

export default QuizCreate