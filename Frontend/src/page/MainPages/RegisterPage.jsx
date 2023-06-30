import React,{useEffect, useState} from "react";
import "../../components/styles/RegisterPage.css";
import {register} from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Navigation from "../../components/Navigation.jsx";


function RegisterPage(){

    const Navegate = useNavigate();

    const [User, setUser] = useState({
        "Nombre": "",
        "Apellido": "",
        "Correo": "",
        "Documento": "",
        "Rol": "" ,
        "Contraseña" : ""
    });

     useEffect(()=>{
        document.body.classList.add('Backgrund-Register-N')
        return () => {
            document.body.classList.remove('Backgrund-Register-N')
        }
    },[])

    function Changer({target: {name, value}}){
        setUser({...User, [name]: value})
    }

    async function handle(e){
        toast('Autenticando datos',{
            theme: "dark",
            type: "default",
            position: "bottom-right"
        });
        try {
            e.preventDefault();
            const result = await register(User);
            toast('Usuario Creado',{
                theme: "dark",
                type: "success",
                position: "bottom-right"
            });
            Navegate('/main/user');
            
        } catch (error) {
            toast(error.response.data,{
                type: "error",
                theme: "dark",
                position: "bottom-center"
            })
        } 
    }

    return(
        <>
        <Navigation />
        <div className="RegisterPage-Render">
            <form className="RegisterPage-Arreg" onSubmit={handle}>
                <div>
                    <h2>Registro</h2>
                    <div className="RegisterPage-Input">
                        <div className="RegisterPage-Re">
                            <label>Primer Nombre</label>
                            <input type="text" name="Nombre" onChange={Changer}  required/>
                        </div>
                        <div className="RegisterPage-Re">
                            <label>Primer Apellido</label>
                            <input type="text" name="Apellido" onChange={Changer} required />
                        </div>
                    </div>
                    <div className="RegisterPage-Input">
                        <div className="RegisterPage-Re">
                            <label>Documento</label>
                            <input type="text" name="Documento" onChange={Changer} required />
                        </div>
                        <div className="RegisterPage-Re">
                            <label>Correo</label>
                            <input type="text" name="Correo" onChange={Changer} required/>
                        </div>
                    </div>

                    <div className="RegisterPage-Input">
                        <div className="RegisterPage-Re">
                            <label>Contraseña</label>
                            <input type="password" name="Contraseña" onChange={Changer} required />
                        </div>
                    </div>
                    
                    <div className="RegisterPage-Rol">
                        <h2>Rol</h2>
                        <input type="radio" name="Rol" id="estudiante" value="estudiante" onChange={Changer} required/>
                        <label htmlFor="estudiante">Estudiante</label>
                        <input type="radio" name="Rol" id="profesor" value="profesor" onChange={Changer} required/>
                        <label htmlFor="profesor">Profesor</label>
                    </div>
                </div>
                <div className="RegisterPage-Button">
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default RegisterPage
