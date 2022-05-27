import React from "react";

export const Counter = ({count, className}) =>{
    return(
        <div className={`counter-container ${className}`}>
            <div className="text">Precio total de tu selección</div>
            <div className="counter">{'$' + count}</div>
        </div>
    )
}