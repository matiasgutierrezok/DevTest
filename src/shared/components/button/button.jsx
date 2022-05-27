import React from "react";

export const Button = ({outlined, text}) => {
    return (
        <div className={`button ${outlined? 'outlined' : 'fill'}`}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="text">{text}</div>
        </div>
    )
}