import React,{useState, useEffect} from "react";
import NavigateClass from "../../components/NavigationClass";
import { getQuest, putQuestion } from "../../api/quiz";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function QuizEditor() {

    const Navegate = useNavigate();

    const [Ques, setQues] = useState([]);

    const [Upd, setUpd] = useState(null);

    const {id} = useParams();

    useEffect(()=>{
        Quest();
    },[]);

    async function Quest(){
        const {data} = await getQuest(id);
        setQues(data);
    }

    const changer = ({target: {name, value}}) =>{
        setUpd({...Upd, [name]: value})
    }

    async function Handler(idQ){
        try {
            await putQuestion(idQ,Upd);
            toast('Se actualizo una pregunta',{
                theme: "dark",
                type: "success",
                position: "bottom-right"
            }); 
        } catch (error) {
            toast('Ocurrio un error',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            });
        }       
    }

    return(
        <>
            <NavigateClass />
            <div className="ContenerAnwers-Quiz">
                <div className="Anwers-Quiz">

                    {
                        Ques.map((Ques, i)=>(
                        <div key={Ques.idpregunta} className="AnwerdQuiz-div">
                            <h3>{i+1}. {Ques.pregunta}</h3>
                            <input type="text" name="pregunta" required onChange={changer}/>
                            <div>
                                <button onClick={()=>Handler(Ques.idpregunta)}>Cambiar pregunta</button>
                            </div>
                        </div>
                        ))   
                    }

                    <div className="Button-Anwers">
                        <button onClick={()=> Navegate('/editor/quiz')}>Terminar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuizEditor