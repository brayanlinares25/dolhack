import React ,{useEffect} from "react";
import Navigation from "../../components/Navigation.jsx";
import {TitleDescripcion1, TitleDescripcion2} from "../../components/TitleAndDescription.jsx";
import "../../components/styles/Spaces.css"
import Poster from "../../components/Big-Poster.jsx"
import ButtonD from "../../components/Button_D.jsx"


function Information(){

    // uso en useEffect para cuando carge la imagen se vuelva a cargar y añadir la clase Spaces
    // que ise en el ../../components/styles/Spaces.css
    
    useEffect(()=>{
        document.body.classList.add("Spaces");
        return() =>{
            document.body.classList.remove("Spaces");
        }
        // agrego un arreglo [] para que solo se repita una vez
    },[])

    return(
            // agrego el componente Poster de ../../components/Big-Poster.jsx
        <>
            <Navigation />
            <Poster 
                // agrego la variable que importe de imagen para mostrarla
                link={"https://res.cloudinary.com/dy58wbxo1/image/upload/w_2000/v1686362477/dolhack-temp/presentacion1_1_dac8vp.jpg"}
                alt={"Imagen 1"}
            />

            <TitleDescripcion2 
                Number={1} 
                Title={'¿Eres un profesor de programación?'}
                Description={'DolHack ofrece un sistema amigable y fácil de usar para que empieces a dictar clase'}
            />
            <TitleDescripcion2 
                Number={2} 
                Title={'¿Quieres estudiar programación'}
                Description={'En DolHack hay muchas clases que puedes explorar a tu gusto'}
            />
            <TitleDescripcion2 
                Number={3} 
                Title={'Aprender es divertido!'}
                Description={'Descubre una nueva forma de aprender con el sistema de niveles de DolHack que te mantendrá entretenido y motivado'}
            />
            <TitleDescripcion1 
                Title={'¡Empecemos!'}
                Description={'¡Crea tu cuenta ya!'}
            />
            <ButtonD
                Text={'Registrate'}
                link={'/login'}
            />
        </>
    )
}

export default Information