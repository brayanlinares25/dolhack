import React, {useEffect} from "react";
import Navigation from "../../components/Navigation.jsx"
import Session from "../../components/session.jsx";
import SessionBox from "../../components/session-box.jsx";
import { FiAlignCenter, FiHeadphones, FiPaperclip } from "react-icons/fi";
import Intro from "../../components/Intro.jsx";
import "../../components/styles/Spaces.css"

function Home(){

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
            <Intro />
            <Session
                descrip={"¿Eres nuevo?"}
            >
                <SessionBox 
                    icon={<FiAlignCenter />}
                    title={"Más Información"}
                    descripcion={"Quieres saber más de DolHack?, hecha un vistazo a lo que ofrece."}
                    button={"Información"}
                />
                <SessionBox 
                    icon={<FiPaperclip />}
                    title={"Servicios"}
                    descripcion={"Quieres ver todas las herramientas útiles que ofreces Dolhack para la enseñanza y el aprendizaje."}
                    button={"Ver Servicios"}
                />
                <SessionBox 
                    icon={<FiHeadphones />}
                    title={"Contactos"}
                    descripcion={"Tienes un problema o una opinión que quieres hacernos?, Compártela en un formulario."}
                    button={"Contactar"}
                />
            </Session>
        </>
    )
}

export default Home
