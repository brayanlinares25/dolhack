import React,{useEffect, useState} from "react";
import Navega from "../../components/NavigationUser";
import { useNavigate } from "react-router-dom";
import "../../components/styles/upProfile.css";
import {upProfile} from "../../api/auth";
import { toast } from "react-toastify";

function ProfileUP(){

    const Navegate = useNavigate();

    const [Info, setInfo] = useState({
        nombre: "",
        apellido: "",
        biografia: ""
    });

    useEffect(()=>{
        document.body.classList.add('Backgrund-Profile');
         return () => {
            document.body.classList.remove('Backgrund-Profile')
         }
    },[]);

    const changer = ({target: {name, value, files}}) =>{
        if(name === 'image'){
            const [file] = files;
            setInfo({...Info,[name]: file});
        }else{
            setInfo({...Info, [name]: value});
        }
    }

    async function ENV(){
        toast('Actualizando perfil...',{
            theme: "dark",
            type: "default",
            position: "bottom-right"
        });
        try {
            const {nombre, apellido,biografia ,image, telefono} = Info;

            const enviar = new FormData();
            enviar.append('nombre', nombre);
            enviar.append('apellido', apellido);
            enviar.append('image',image);
            enviar.append('biografia', biografia);
            enviar.append('telefono', telefono);
            console.log(enviar);
            await upProfile(enviar);
            toast('Actualizado',{
                theme: "dark",
                type: "success",
                position: "bottom-right"
            })
            Navegate('/main/user');
        } catch (error) {
            toast('Ocurrio un error',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            });   
            console.log(error);
        }
    }

    async function Handle(e){
        e.preventDefault();
        ENV();
    }

    return(
        <>
            <Navega />
            <div className="UpProfile_DIV">
                <form onSubmit={Handle}>
                    <h2>Actualiza o modifica tus datos</h2>
                    <div className="UpProfile_Input">
                        <label>Nombre</label>
                        <input type="text" name="nombre" required onChange={changer} />
                    </div>
                    <div className="UpProfile_Input">
                        <label>Apellido</label>
                        <input type="text" name="apellido" onChange={changer} />
                    </div>
                    <div className="UpProfile_Text">
                        <label>Biografía</label>
                        <textarea name="biografia" id="" cols="30" rows="10" onChange={changer} ></textarea>
                    </div>
                    <div className="UpProfile_Input">
                        <label>Telefono</label>
                        <input type="text" name="telefono" onChange={changer} />
                    </div>
                    <div className="UpProfile_Img">
                        <label>Foto de perfil</label>
                        <input type="file" className="UpProfile_File" name="image" onChange={changer} />
                    </div>
                    <div className="UpProfile_Button">
                        <button type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileUP