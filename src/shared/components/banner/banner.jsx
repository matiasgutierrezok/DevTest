import React from "react";
import Stray from "../../../assets/Stray.jpg"

export const Banner = () =>{
    return(
        <div className="banner">
            <img src={Stray} alt="" className="img"/>
        </div>
    )
}