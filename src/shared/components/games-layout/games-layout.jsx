import React from "react";
import { GameCard } from "../game-card/game-card";


export const GamesLayout = ({gamesArray, counter}) =>{
    return(
        <div className="games-layout">
            {gamesArray?.map(obj=>{
                return(
                    <GameCard
                      thumb={obj.thumb}
                      savings={obj.savings}
                      title={obj.title}
                      rating={obj.steamRatingPercent}
                      normalPrice={obj.normalPrice}
                      salePrice={obj.salePrice}
                      key={obj.dealID}
                      counter={counter}
                    />
                )
            })}
        </div>
    )
}