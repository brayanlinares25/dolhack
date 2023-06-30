import React from "react";
import "./styles/NavigationClass.css"
import { VscChromeClose } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import {Exit as exitC} from "../api/class";
import {VerificRol} from "../api/auth";
import {toast} from "react-toastify";

function NavigateClass(){

    const Navigate = useNavigate()

    async function Exit(){
        await exitC();
        Navigate('/main/user');
    }

    async function setting(){
        const {data} = await VerificRol();
        if(data[0] === 'profesor'){
            Navigate('/class/main/setting');
        } else{
            toast('No eres profesor',{
                theme: "dark",
                position: "bottom-right",
                type: "warning"
            });
        }
    }
    
    return(
        <>
            <header className="NavClass">
                <h1 className="ExitC" onClick={Exit}><VscChromeClose /></h1>
                    <nav>
                       <ul><Link to={'/class/main'}>Bandeja</Link></ul>
                       {/*<ul><a href="#">Trabajos</a></ul>*/}
                       <ul><Link to={'/class/main/quiz'}>Quiz</Link></ul>
                       <ul><Link to={'/class/main/qualification'}>Calificaciónes</Link></ul>
                    </nav>
                <h2 className="Ajustes-Crud" onClick={()=> setting()}>Ajustes</h2>
            </header>
        </>
    )
}

export default NavigateClass