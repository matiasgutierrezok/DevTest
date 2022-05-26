import React from "react";
import { Banner } from "../../shared/components/banner/banner";
import { NavBar } from "../../shared/components/navbar/navbar";

export const HomeScr = () => {
    return(
        <div className="home-screen">
            <NavBar/>
            <Banner/>
        </div>
    )
}