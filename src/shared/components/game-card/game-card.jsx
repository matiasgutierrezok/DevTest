import React from "react";

export const GameCard = ({savings, thumb, title, rating, normalPrice, salePrice}) =>{

    const savingsPercentage = () =>{
        return savings?.slice(0,2) + "%off"
    }

    return(
        <div className="game-card">
            <div className="game-savings">{savingsPercentage()}</div>
            <img src={thumb} alt="" className="game-img"/>
            <div className="game-title">{title}</div>
            <div className="game-review-container">
                <div className="game-review-text">Steam Review</div>
                <div className="game-rating">
                    <span className={`${rating > 0? 'fa' : 'fa-regular'} fa-star`}></span>
                    <span className={`${rating >= 25? 'fa' : 'fa-regular'} fa-star`}></span>
                    <span className={`${rating >= 50? 'fa' : 'fa-regular'} fa-star`}></span>
                    <span className={`${rating >= 75? 'fa' : 'fa-regular'} fa-star`}></span>
                    <span className={`${rating >= 100? 'fa' : 'fa-regular'} fa-star`}></span>
                </div>
            </div>
            <div className="game-price-container">
                <div className="game-normal-price">{'$' + normalPrice}</div>
                <div className="game-price">{'$' + salePrice}</div>
            </div>
        </div>
    )
}