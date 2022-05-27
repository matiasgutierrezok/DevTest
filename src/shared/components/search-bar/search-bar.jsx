import React from "react";

export const SearchBar = ({data, setFilteredData}) =>{

    const filterFunction = (input) => {
        if(input?.length === 0) {
            setFilteredData(false);
            return
        };
        const results = [];
        let typed = input;
        typed = typed.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        data.forEach((e)=> {
            let gameTitle = e.title;
            gameTitle = gameTitle.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if(gameTitle.toLowerCase().includes(typed.toLowerCase())) results.push(e)
        });
        if(results[0] === undefined) setFilteredData('No hay resultados');
        else setFilteredData(results);
    }

    return(
        <div className="search-bar-container">
            <div className="search-bar">
                <input
                  type="search"
                  placeholder="Search"
                  onChange={(e)=>filterFunction(e.target.value)}
                />
                <span className="material-symbols-outlined">search</span>
            </div>
        </div>
    )
}