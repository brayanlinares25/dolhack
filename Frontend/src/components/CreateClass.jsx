import React,{useEffect, useState} from "react";
import "./styles/CreateClass.css"
import { useNavigate } from "react-router-dom";
import {AddClass} from "../api/class";

function CreateClass(){

    useEffect(()=>{
        document.body.classList.add('Backgrund-CreateClass');
         return () => {
            document.body.classList.remove('Backgrund-CreateClass')
         }
    },[]);

    const [Class, setClass] = useState({
        "Nombre": "",
        "Descripcion": "",
        "Fecha_Inicio": "",
        "Fecha_Finalizacion": "",
        "Nivel": "",
        "Tipo": ""
    });

    const changer = ({target: {name, value}}) =>{
        setClass({...Class, [name]: value})
    }

    const Navegate = useNavigate();

    async function PostClass(data){
        const result =  await AddClass(data);
        Navegate('/main/user/');  
    }

    function url(e){
        e.preventDefault();
        PostClass(Class);     
    }

    return(
            <div className="NewClass">
                <form onSubmit={url} className="FormClass">
                    <h2>Crea Una Clase</h2>
                    <div className="Div-Input">
                        <input type="text" name="Nombre" required onChange={changer} />
                        <label>Nombre</label>
                    </div>
                    <div className="Div-Texarea">
                        <textarea type="text" name="Descripcion" id="Descripcion" required onChange={changer} ></textarea>
                        <label>Descripcion</label>
                    </div>
                    <div className="Div-Input2">
                        <input type="text" name="Fecha_Inicio" required onChange={changer} />
                        <label>Fecha De Inicio (aa-mm-dd)</label>
                    </div>
                    <div className="Div-Input3">
                        <input type="text" name="Fecha_Finalizacion" required onChange={changer} />
                        <label>Fecha De Finalizacion (aa-mm-dd)</label>
                    </div>
                    <div className="Div-Nivel">
                        <h3>Nivel</h3>
                        <input type="radio" name="Nivel" id="N1MF" value="N1MF" onChange={changer} />
                        <label htmlFor="N1MF">Muy facil</label>
                        <input type="radio" name="Nivel" id="N2F" value="N2F" onChange={changer} />
                        <label htmlFor="N2F">Facil</label>
                        <input type="radio" name="Nivel" id="N3M" value="N3M" onChange={changer} />
                        <label htmlFor="N3M">Medio</label>
                        <input type="radio" name="Nivel" id="N4D" value="N4D" onChange={changer} />
                        <label htmlFor="N4D">Dificil</label>
                        <input type="radio" name="Nivel" id="N5MD" value="N5MD" onChange={changer} />
                        <label htmlFor="N5MD">Muy dificil</label>
                    </div>
                    <div className="Div-Nivel">
                        <h3>Tipo</h3>
                        <input type="radio" name="Tipo" id="A01" value="A01" onChange={changer} />
                        <label htmlFor="A01">Java</label>
                        <input type="radio" name="Tipo" id="A02" value="A02" onChange={changer} />
                        <label htmlFor="A02">PHP</label>
                        <input type="radio" name="Tipo" id="A03" value="A03" onChange={changer} />
                        <label htmlFor="A03">JavaScript</label>
                        <input type="radio" name="Tipo" id="A04" value="A04" onChange={changer} />
                        <label htmlFor="A04">Programación</label>
                    </div>
                    <button type="submit">Crear</button>
                </form>
            </div> 
   )
}

export default CreateClass