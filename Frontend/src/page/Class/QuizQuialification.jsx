import React, {useState, useEffect} from "react";
import NavigateClass from "../../components/NavigationClass";
import ContenerClass from "../../components/ContenerClass";
import StudentsList from "../../components/StudentsList";
import AnswerQuialification from "../../components/AnswerQuialification";
import Downland from "../../components/DownlandExecel";
import {showEstudiante} from "../../api/quialification";

function QuizQuialification() {

    const [Resp, setResp] = useState([]);

    useEffect(()=>{
        GetRes();
    },[])

    async function GetRes(){
        const result = await showEstudiante();
        setResp(result.data);
    }

    return(
        <>
            <NavigateClass />
            <ContenerClass>
                <Downland data={Resp} Name={'Nota Estudiantes'} />
                <AnswerQuialification />
                <StudentsList />
            </ContenerClass>
        </>
    )
}

export default QuizQuialification