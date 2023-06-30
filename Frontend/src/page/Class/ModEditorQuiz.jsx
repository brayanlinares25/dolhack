import React,{useEffect, useState} from "react";
import NavigateClass from "../../components/NavigationClass";
import ContenerClass from "../../components/ContenerClass";
import Downland from "../../components/DownlandExecel";
import DeleteAll from "../../components/DeleteAll";
import ListQuizE from "../../components/ListQuizEdit";
import { quiz, DeleteQuiz, DeleteAllQ } from "../../api/quiz";
import { toast } from "react-toastify";

function Mod(){

    const [Quiz, setQuiz] = useState([]);

    useEffect(()=>{
        GetQuiz();
    },[]);

    async function GetQuiz(){
        const {data} =  await quiz();
        setQuiz(data);
    }

    async function DeleteOne(id){
        try {
            await DeleteQuiz(id);
            toast('Se elemino el examen',{
                theme: "dark",
                position: "bottom-right",
                type: "success"
            });
            window.location.reload();
        } catch (error) {
            toast('No se pudo eliminar 500',{
                theme: "dark",
                position: "bottom-right",
                type: "error"
            });
        }
    }

    async function Deleteall(){
        try {
            await DeleteAllQ();
            toast('Se eliminaron todos los quiz',{
                theme: "dark",
                position: "bottom-right",
                type: "success"
            })
            window.location.reload();
        } catch (error) {
            toast('No se pudieron eliminar todos los quiz Error 500',{
                theme: "dark",
                position: "bottom-right",
                type: "error"
            })
        }
    }

    return( 
        <>
            <NavigateClass />
            <ContenerClass>
                <Downland data={Quiz} Name={'Examenes'} />
                <ListQuizE quizs={Quiz} delet={DeleteOne} />
                <DeleteAll allDelet={Deleteall} />
            </ContenerClass>
        </>
    );
}

export default Mod