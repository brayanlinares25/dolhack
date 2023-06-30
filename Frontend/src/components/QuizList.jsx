import React,{useState, useEffect} from "react";
import { quiz } from "../api/quiz";
import { Link } from "react-router-dom";
import "./styles/QuizList.css";

function QuizList(){

    const [Ques, setQues] = useState([]);

    useEffect(()=>{
        GetQuiz();
    },[]);

    async function GetQuiz(){
        const result = await quiz();
        setQues(result.data);
    };

    return(
        <div className="ContenerOfTray">
            {
                Ques.map((Ques)=>(
                    <div key={Ques.idquiz} className="QuizList-Div">
                        <div>
                            <Link to={'/class/main/quiz/' + Ques.idquiz}>{Ques.titulo}</Link>
                            <h5>{Ques.calificacion}</h5>
                        </div>
                        <p>{Ques.descripcion}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default QuizList