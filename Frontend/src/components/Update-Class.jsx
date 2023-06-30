import React,{useEffect, useState} from "react";
import './styles/Update-Class.css';
import {DeleteClases, UpdateClases} from "../api/class";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateClass(){

    const Navegate = useNavigate();

    const [Class, setClass] = useState({
        "Nombre": "",
        "Descripcion": "",
        "Nivel": "",
        "Tipo": ""
    });

    const changer = ({target: {name, value}}) =>{
        setClass({...Class, [name]: value})
    }

    async function Update(Date){
        try {
            const result = await UpdateClases(Date);
            toast(result.data,{
                type: "success",
                theme: "dark",
                position: "bottom-right"
            });
        } catch (error) {
            toast('No se pudo actualizar',{
                type: "error",
                theme: "dark",
                position: "bottom-right"
            })
        }   
    }

    async function Delete(e){
        e.preventDefault();
        try {
            const result = await DeleteClases();
            toast(result.data,{
                type: "success",
                theme: "dark",
                position: "bottom-right"
            });
            Navegate('/main/user');
        } catch (error) {

            console.log(error.response.data.message)

           toast('Error 500, no se pudo eliminar',{
                type: "info",
                theme: "dark",
                position: "bottom-right"
           })
        }
    }

    function Handle(e){
        e.preventDefault();
        Update(Class);
        Navegate('/class/main');
    }

    return(
        <div className="Render-UpdateClass">
            <div className="UpdateClass">
                <form onSubmit={Handle} className="Form-UpClass">
                    <div className="Contener-UpClass">
                        <h2>Datos de Clase</h2>
                        <label>Nombre de la clase</label>
                        <input type="text" name="Nombre" onChange={changer} />
                        <label>Descripcion de la clase</label>
                        <textarea name="Descripcion" cols="30" rows="10" onChange={changer}></textarea>
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
                    </div>
                    <div className="Button-UpdateClass">
                        <button type="submit">Actualizar</button>
                        <button className="Eliminar" onClick={Delete}>Eliminar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateClass
