import React from "react";
import logo from "../../../assets/logo.png";
import { Button } from "../button/button";

export const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="menu-container">
                <div>Home</div>
                <div>Browse</div>
                <Button text='Cart' outlined={true}/>
            </div>
        </div>
    )
}