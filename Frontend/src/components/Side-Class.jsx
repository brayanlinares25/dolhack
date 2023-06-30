import React,{useEffect, useState} from "react";
import './styles/Side-Class.css'
import { useNavigate, Link } from "react-router-dom";
import {MyClass, EnterClassV} from "../api/class";
import {VerificRol} from "../api/auth"
import { toast } from "react-toastify";
import { TiGroup } from "react-icons/ti";

// El lado izquierdo de la interfaz de los usuarios

function Side(){

    const Navegate = useNavigate();

    function url(){
        valid()      
    }

    const [Class , setClass] = useState([]);

    useEffect(()=>{
        GetMyClass();
    },[]);

    async function GetMyClass(){
        const result = await MyClass();
        setClass(result.data)
    }

    async function valid(){
        const result = await VerificRol();
        if(result.data[0] == "profesor"){
            Navegate('/main/user/newclass');
        }else{
            toast('Necesitas ser profesor para crear una clases',{
                type: "warning",
                theme: "dark",
                position: "bottom-right"
            })
        }
    }

    async function EnterClass(id){
        try {
            await EnterClassV(id);
            Navegate('/class');
        } catch (error) {
            toast('Ups, ubo un error',{
                type: "error",
                theme: "dark",
                position: "bottom-right"
            })
        }
    }

    return(
        <aside>
            <div className="class-pillar">
                <div className="SideClass-Render">
                    <h2>Tus Clases</h2>
                    <div>
                        <input type="text" name="" id="" placeholder="Buscar..." /> 
                        <button onClick={url} >Crear</button>
                    </div>
                </div>
                <div className="class-list-side">
                    {
                        Class.map((Class,i)=>(
                            <ul key={Class.idclase}> <TiGroup style={{position: "relative", top: "2px"}} /> <Link onClick={() => EnterClass(Class.idclase)}>{Class.titulo}</Link></ul>
                        ))
                    }
                </div>
                <h6>(C)DolHack</h6>
            </div>
        </aside>
    )
}

export default Side