import React from "react";
import { useEffect } from "react";
import './styles/Login-Register.css'
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

function Login(){

    useEffect(()=>{
        document.body.classList.add('Backgrund-Login-Register')
        const RegisterBTN = document.querySelector('.Register-link')
        const LoginLayaut = document.querySelector('.Login-Home')
        const HomeLR = document.querySelector('.Login-Register-DolHack')
        const LoginBTN = document.querySelector('.Login-link')

        RegisterBTN.addEventListener('click', ()=> {
            LoginLayaut.classList.add('login')
            HomeLR.classList.add('active')
        })
        LoginBTN.addEventListener('click', ()=> {
            LoginLayaut.classList.remove('login')
            HomeLR.classList.remove('active') 
        })
        return () => {
            document.body.classList.remove('Backgrund-Login-Register')
            RegisterBTN.addEventListener('click', ()=> {
                LoginLayaut.classList.add('login')
                HomeLR.classList.add('active')
            })
            LoginBTN.addEventListener('click', ()=> {
                LoginLayaut.classList.remove('login')
                HomeLR.classList.remove('active') 
            })
        }
    },[])

    const navigate = useNavigate()

    const  { singLogin, User, Verific } = useAuth();

    const {register, handleSubmit} = useForm();
/*
    useEffect(()=>{
        if(Verific) navigate('/main/user');
    },[User]);
*/
    const GetInto = async (values) => {
        try {
            await singLogin(values);
            navigate('/main/user');
        } catch (error) {
            toast(error.response.data,{
                type: "error",
                theme: "dark",
                position: "bottom-right"
            })
        }
    }

    return(
        <div className="Login-Register-DolHack">
            <div className="Login-Home">

                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit(GetInto)}>
                    <div className="Input-box">
                        <input type="text" {...register("Correo",{required:true})} />
                        <label>Correo</label>
                    </div>
                    <div className="Input-box">
                        <input type="password" {...register("Contraseña",{required: true})} />
                        <label>Contraseña</label>
                    </div>
                    <div className="Forget-Password">
                        <label><input type="checkbox"/> ¿Recordarme?</label>
                        <a href="#">¿olvidaste la contraseña?</a>
                    </div>
                    <button type="submit" className="BTN-Login">Ingresar</button>
                    <div className="Login-Register">
                        <p>¿no tengo una cuenta?  <a style={{cursor:"pointer"}} className="Register-link"> Registrar</a></p>
                    </div>
                </form>
            </div>

            <div className="Login-Home register">
                <h2>Registrar</h2>
                <form onSubmit={() => navigate('/register')}>
                    <div className="Input-box">
                        <input type="text" required/>
                        <label>Nombre de usuario</label>
                    </div>
                    <div className="Input-box">
                        <input type="text" required/>
                        <label>Correo</label>
                    </div>
                    <div className="Input-box">
                        <input type="password" required/>
                        <label>Contraseña</label>
                    </div>
                    <div className="Forget-Password">
                        <label><input type="checkbox"/> ¿Aceptas los términos y condiciones?</label>
                    </div>
                    <button type="submit" className="BTN-Login" >Registrar</button>
                    <div className="Login-Register">
                        <p>¿no tengo una cuenta?  <a style={{cursor:"pointer"}} className="Login-link">Iniciar sesión</a></p>
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default Login