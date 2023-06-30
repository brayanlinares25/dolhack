import React, { useState } from "react";
import "./styles/QuizQuestion.css";
import {postQuest} from "../api/quiz";
import { useParams,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QuizQuestion= () => {

  const Navegate = useNavigate();    

  const [questionCounter, setQuestionCounter] = useState(0);

  const addQuestion = () => {
    setQuestionCounter((prevCounter) => prevCounter + 1);
  };

  const deleteQuestion = (index) => {
    setQuestionCounter((prevCounter) => prevCounter - 1);
    
  };

  return (
    <div className="containerQuiz-Div">
      <h1>Examen</h1>
      <div id="questions-container">
        <h2>Preguntas</h2>
        {Array.from({ length: questionCounter }).map((_, i) => (
          <Question
            key={i}
            questionIndex={i}
            deleteQuestion={deleteQuestion}
          />
        ))}
        <div>
          <button onClick={addQuestion}>Agregar pregunta</button>          
          <button onClick={() => Navegate('/class/main/quiz')}>Termine</button>
        </div>
      </div>
    </div>
  );
};

const Question = ({ questionIndex, deleteQuestion }) => {
  const handleDeleteQuestion = () => {
    deleteQuestion(questionIndex);
  };

  const [Quiz, setQuiz] = useState({'pregunta':''});
  
  function changer({target: {name, value}}){
    setQuiz({...Quiz, [name]: value});
  }
  
  const {id} = useParams();  

  async function handle(){
    try {
      const result = await postQuest(id, Quiz);
      console.log(result);
      toast('Se acaba de guardar la pregunta',{
        theme: "dark",
        position: "bottom-right",
        type: "success"
      })
    } catch (error) {
      toast('Acaba de ocurrir un error',{
        theme: "dark",
        type: "error",
        position: "bottom-right"
      }) 
    }
  }

  return (
    <div className="Quizquestion">
      <label>Pregunta {questionIndex + 1}</label>
      <input type="Quiztext" required onChange={changer} name="pregunta"/>
      <div>
        <button className="delete-question" onClick={handleDeleteQuestion}>
          Eliminar pregunta
        </button>
        <button onClick={handle}>
          Enviar Pregunta
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;