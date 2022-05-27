import React, { useState } from "react";

export const GameCard = ({savings, thumb, title, rating, normalPrice, salePrice, counter}) =>{
    const [isSelected, setIsSelected] = useState(false)

    const savingsPercentage = () =>{
        return savings?.slice(0,2) + "%off"
    }

    const handleCount = () =>{
        let num = parseFloat(salePrice)
        if(!isSelected === true) counter(num)
        else if(!isSelected === false) counter(-num)
        setIsSelected(!isSelected)
    }

    return(
        <div className="game-card" onClick={()=>handleCount()}>
            <div className={`${isSelected ? 'game-selected flex' : 'game-selected'}`}>
                <span class="material-symbols-outlined">check</span>
            </div>
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