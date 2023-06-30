import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {foundStuden} from "../../api/auth";
import { ImWhatsapp,ImGoogle, ImParagraphCenter, ImUser, ImPacman } from "react-icons/im";

function InfoUser(){

    const Navegate =  useNavigate();

    const [User, setUser] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        GetUser();
        document.body.classList.add('Backgrund-Profile');
         return () => {
            document.body.classList.remove('Backgrund-Profile')
        }
    },[]);

    async function GetUser(){
        const {data} = await foundStuden(id);
        setUser(data[0]);
    }

    return(
        <div className="Profile-Render">
            <div className="Profile-Orden">
                <div className="Profile-Info">
                    <div>
                        <h2><samp><ImUser /></samp> {User.nombre} {User.apellido}</h2>
                    </div>
                    <div className="IMG">
                        <img src={User.img} />
                    </div>
                    <div className="Biografía">
                        <p><samp><ImParagraphCenter /></samp> {User.biografia}</p>
                    </div>
                    <div>
                        <h2><samp><ImGoogle /></samp> {User.correo}</h2>
                    </div>
                    <div>
                        <h2><samp><ImWhatsapp /></samp> {User.numero}</h2>
                    </div>
                    <div>
                        <h2><samp><ImPacman /></samp> {User.rol}</h2>
                    </div>
                    <div className="Profile-Actual-Elimi">
                        <button onClick={()=>Navegate('/class/main')}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoUser