import bigDecimal from "js-big-decimal";
import React, { useEffect, useState } from "react";
import { Banner } from "../../shared/components/banner/banner";
import { Counter } from "../../shared/components/counter/counter";
import { Footer } from "../../shared/components/footer/footer";
import { GamesLayout } from "../../shared/components/games-layout/games-layout";
import { NavBar } from "../../shared/components/navbar/navbar";
import { SearchBar } from "../../shared/components/search-bar/search-bar";

export const HomeScr = () => {
    const [gameData, setGameData] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const [count, setCount] = useState(0);

    const fetchGameData = async () => {
        const options = {method: 'GET'};
        try{
            await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=0.01`, options)
                .then((response) => response.json())
                .then((dataJson) => setGameData(dataJson))
        } catch(err){console.error(err)}
    }

    useEffect(()=>{
        fetchGameData();
    }, [])

    const changeCount = (price) =>{
        let num = count;
        num = bigDecimal.add(`${num}`, `${price}`);
        setCount(parseFloat(bigDecimal.getPrettyValue(num)));
    }

    return(
        <div className="home-screen">
            <NavBar/>
            <Banner/>
            <SearchBar data={gameData} setFilteredData={setFilteredData}/>
            <Counter count={count} className={count === 0 ? 'none' : 'flex'}/>
            {filteredData && Array.isArray(filteredData) ? <GamesLayout count={count} counter={changeCount} gamesArray={filteredData}/>
             : filteredData? <div className="no-results">{filteredData}</div>
             : gameData? <GamesLayout count={count} counter={changeCount} gamesArray={gameData}/> : null}
            <Footer/>
        </div>
    )
}