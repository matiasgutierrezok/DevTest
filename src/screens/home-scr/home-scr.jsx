import React from "react";
import { Banner } from "../../shared/components/banner/banner";
import { NavBar } from "../../shared/components/navbar/navbar";
import { SearchBar } from "../../shared/components/search-bar/search-bar";

export const HomeScr = () => {
    return(
        <div className="home-screen">
            <NavBar/>
            <Banner/>
            <SearchBar/>
        </div>
    )
}