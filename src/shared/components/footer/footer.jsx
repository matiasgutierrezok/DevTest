import React from "react";
import logoFooter from "../../../assets/imgs/logo footer.png";

export const Footer = () =>{

    const Divider = () =>{
        return(
            <div className="divider"/>
        )
    }

    return(
        <div className="footer">
            <img src={logoFooter} alt=""/>
            <div className="links-container">
                <a href="/#" target="_blank">Acerca de Valve</a>
                <Divider/>
                <a href="/#" target="_blank">Steamworks</a>
                <Divider/>
                <a href="/#" target="_blank">Empleo</a>
                <Divider/>
                <a href="/#" target="_blank">Distribución de Steam</a>
                <Divider/>
                <a href="/#" target="_blank">Tarjetas regalo</a>
                <Divider/>
                <a href="/#" target="_blank">Steam</a>
                <Divider/>
                <a href="/#" target="_blank">@steam</a>
            </div>
        </div>
    )
}