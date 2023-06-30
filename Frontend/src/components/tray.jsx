import React, { useEffect, useState } from "react";
import "./styles/tray.css"
import {getPosts} from "../api/class"

function Tray({src}){
    
    const [Post, setPost] = useState([]);

    useEffect(()=>{
        GetPosts();
    },[]);

    async function GetPosts(){
        const result = await getPosts();
        setPost(result.data);
    }

    return(
        <div className="ContenerOfTray">
            {
                Post.map((Post) =>(
                    <div className="TrayClass" key={Post.idpublicacion} >
                        <div className="renderTray">
                            <div>
                                <img src={Post.img} alt="" />
                                <h5 className="TrayH5">{Post.nombre} {Post.apellido}</h5>
                            </div>
                            <h5>{Post.fecha_publicacion}</h5>
                        </div>
                        <h2>{Post.titulo}</h2>
                        <p>{Post.descripcion}</p>
                        <img src={Post.imagen} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default Tray