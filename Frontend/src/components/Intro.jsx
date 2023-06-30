import React,{useEffect} from "react";
import "./styles/Intro.css"

function Intro(){

    useEffect(()=>{
        document.body.classList.add('Backgrund-Login-Register');
        return() =>{
            document.body.classList.remove('Backgrund-Login-Register');
        }
    })

    return(
        <div className="Intro">
            <h2>DolHack</h2>
            <div className="Main-Image">
               <img src={"https://res.cloudinary.com/dy58wbxo1/image/upload/v1686364121/dolhack-temp/LogoBeta_vgdfp5.png"} /> 
            </div>
        </div> 
    )
}

export default Intro