import React from "react";
import NavigateClass from "../../components/NavigationClass.jsx";
import ContenerClass from "../../components/ContenerClass.jsx";
import Tray from "../../components/tray.jsx";
import StudentsList from "../../components/StudentsList.jsx";
import UpPost from "../../components/UpPost.jsx";

function Class(){
    return(
        <>
            <NavigateClass />
            <ContenerClass>
                <UpPost />
                <Tray src={'https://noviello.it/content/images/2021/09/java-1.jpg'} />
                <StudentsList />
            </ContenerClass>
        </>
    )
}

export default Class
