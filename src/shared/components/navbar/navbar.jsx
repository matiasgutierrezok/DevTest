import React from "react";
import logo from "../../../assets/imgs/logo.png";
import { Button } from "../button/button";

export const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="menu-container">
                <a href="/#">Home</a>
                <a href="/#">Browse</a>
                <Button text='Cart' outlined={true}/>
            </div>
            <span class="material-symbols-outlined">menu</span>
        </div>
    )
}