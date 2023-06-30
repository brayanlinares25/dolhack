import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {showEstudiante} from "../api/quialification";

function AnswerQuialification() {

    const [Resp, setResp] = useState([]);

    useEffect(()=>{
        GetRes();
    },[])

    async function GetRes(){
        const result = await showEstudiante();
        setResp(result.data);
    }

    return(
        <div className="ContenerOfTray">
            {
                Resp.map((Resp)=>(
                    <div key={Resp.idrespuesta} className="QuizList-Div">
                        <div>
                            <Link to={'/class/main/qualification/'+ Resp.idestudiante + '/'+ Resp.idquiz}>{Resp.nombre} {Resp.apellido}</Link>
                        </div>
                        <p>{Resp.titulo}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AnswerQuialification