import React from "react";
import "./styles/ListQuizEdit.css";
import { CgTrashEmpty } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ListQuizE({quizs,delet}){

    const Navegate = useNavigate();

    return(
        <div className="ContenerOfTray">
            {
                quizs.map((quizs)=>(
                <div key={quizs.idquiz} className="QuizEdit_list">
                    <div>
                        <h2>{quizs.titulo}</h2>
                        <p>{quizs.descripcion}</p>
                    </div>
                    <div className="Button_QuizEdit_list">
                        <button onClick={()=> Navegate('/editor/quiz/'+ quizs.idquiz)} ><TbSettings2 /></button>
                        <button style={{backgroundColor:"brown"}} onClick={()=>delet(quizs.idquiz)} ><CgTrashEmpty /></button>
                    </div>
                </div>
                ))
            }
        </div>
    );
}

export default ListQuizE