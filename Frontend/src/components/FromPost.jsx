import React,{useState, useEffect} from "react";
import {postPost} from "../api/class"
import { useNavigate } from 'react-router-dom';
import "./styles/FromPost.css";
import {toast} from 'react-toastify';

function FromPost() {

    const Navegate = useNavigate();

    const [Env, setEnv] = useState({/*
        "titulo": "",
        "descripcion": "",
        "image": null*/
    });

    useEffect(()=>{
        document.body.classList.add('Backgrund-CreateClass');
         return () => {
            document.body.classList.remove('Backgrund-CreateClass')
         }
    },[]);

    const changer = ({target: {name, value, files}}) =>{
        if(name === 'image'){
            const [file] = files;
            setEnv({...Env,[name]: file});
        }else{
            setEnv({...Env, [name]: value});
        }
    }

    /*async function PostQuiz(date){
        const {data} = await postPost(date);
        Navegate('/class/main');
        console.log(date);
    }*/

    async function ENV(){
        toast('Enviando Publicacion...',{
            theme: "dark",
            type: "default",
            position: "bottom-right"
        });
        try {
            const {titulo, descripcion, image} = Env;

            const enviar = new FormData();
            enviar.append('titulo', titulo);
            enviar.append('descripcion', descripcion);
            enviar.append('image',image);
            await postPost(enviar);
            toast('Publicado',{
                theme: "dark",
                type: "success",
                position: "bottom-right"
            })
            Navegate('/class/main');
        } catch (error) {
            toast('Ocurrio un error',{
                theme: "dark",
                type: "error",
                position: "bottom-right"
            });   
            console.log(error);
        }
    }

    function Hangle(e){
        e.preventDefault();
        ENV();
    }

  return (
    <div className='QuizCreate-Div'>
        <h1 style={{marginBottom: '20px'}}>Publicar</h1>
            <form onSubmit={Hangle}>
                <div style={{marginBottom: '20px'}}>
                    <label>titulo</label>
                    <input type="text" name='titulo' required onChange={changer}/>
                </div>
                <div style={{marginBottom: '35px'}} className="TextAreaPost">
                    <label>descripción</label>
                    <textarea name="descripcion" id="" cols="30" rows="10" onChange={changer}></textarea>
                </div>
                <div className="Imag_Post">
                    <label>Inserta una imagen</label>
                    <input type="file" name="image" id="image" onChange={changer} />
                </div>
                <div className='QuizCreate-Button'>
                    <button>Crear Publicación</button>
                </div>
            </form>
        </div>
  )
}

export default FromPost