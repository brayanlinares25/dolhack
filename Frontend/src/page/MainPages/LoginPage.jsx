import React from "react";
import Navigation from "../../components/Navigation.jsx";
import Register from "../../components/Login-Register.jsx"

function LoginPage(){
    return(
            // agrego los 2 componentes de registro de ../../components/Login-Register.jsx || Navigation.jsx
        <>
            <Navigation/>
            <Register/>
        </>
    )
}

export default LoginPage