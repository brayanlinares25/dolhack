import React from "react";
import "./styles/update_user.css";

function UpdateUser(){
    return(
        <div className="UpdataUser-Render">
            <div className="UpdateUser-div">
                <form action="#" className="UpdateUser-Form">
                    <label>Nombre</label>
                    <input type="text"/>
                    <label>Apellido</label>
                    <input type="text"/>
                    <label>Documento</label>
                    <input type="text"/>
                    <label>Telefono</label>
                    <input type="text"/>
                    <button type="submit">Actualizar</button>
                </form>
                <div className="UpdataUser-Side">
                    <div className="UpdataUser-IMG">
                        <img src="https://thumbs.dreamstime.com/b/icono-de-paciente-masculino-permanente-eps-vectoriales-estilo-plano-197569857.jpg" alt="porft"/>
                    </div>
                    <h2>USER23535</h2>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
