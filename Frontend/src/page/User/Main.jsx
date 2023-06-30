import React from "react";
import NavigationUser from "../../components/NavigationUser";
import Side from "../../components/Side-Class";
import MainClass from "../../components/Main-Class";
import Footer from "../../components/footer";

function Main(){
    return(
        // agrego 3 componetes betas de la interfaz de usuario
        <>
            <NavigationUser />
            <Side />
            <MainClass />

        </>
    )
}

export default Main