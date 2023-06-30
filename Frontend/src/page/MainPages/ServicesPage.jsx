import React,{useEffect} from "react";
import Navigation from "../../components/Navigation.jsx";
import Session from "../../components/session.jsx";
import SessionBox from "../../components/session-box.jsx";
import "../../components/styles/Spaces.css"
import { AiOutlineUser, AiTwotoneFolderOpen } from "react-icons/ai";
import BigTitle from "../../components/Big-Title.jsx";


function Services(){
        // uso en useEffect para cuando carge la imagen se vuelva a cargar y añadir la clase Spaces
    // que ise en el ../../components/styles/Spaces.css

    useEffect(()=>{
        document.body.classList.add("Spaces");
        return() =>{
            // Cuando el usuario se valla de la pagina, quita la clase
            document.body.classList.remove("Spaces");
        }
         // agrego un arreglo [] para que solo se repita una vez
    },[])

    return(
        <>
            <Navigation />
            <BigTitle 
                Title={"DolHack"}
                Descripcion={"El sistema Dolhack es un sistema donde todas personas puede comenzar con su aprendizaje en el mundo de la programación donde ofrecemos múltiples curso para que pueda comenzar y adquirir nueva, habilidades"}
            />
            <Session
                descrip={"¿Para Quien va nuestro servicio?"}
            >

            <SessionBox 
                icon={<AiOutlineUser />}
                title={"¿Quieres Aprender?"}
                descripcion={"Dolhack ofrece múltiples cursos para todo aquel que quiera aprender y adquirir nuevas habilidades"}
                button={"Ingresar"}
            />
            <SessionBox 
                icon={<AiTwotoneFolderOpen />}
                title={"¿Quieres Enseñar?"}
                descripcion={"Quieres trasmitir tus conocimientos con los demás, el sistema dolhack te ofrece el poder acompañarte a trasmitir conocimientos con creación de clase y la distribución de material de calidad"}
                button={"Ingresar"}
            />

            </Session>
        </>
    )
}

export default Services