import React from "react";
import "./styles/ContenerClass.css";

function ContenerClass({children}){
    return(
        <div className="ContenerClass">
            {children}
        </div>
    )
}

export default ContenerClass