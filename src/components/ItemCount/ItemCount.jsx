import "./ItemCount.scss"

import React, { useState, useEffect } from 'react'

function ItemCount(props) {

    const { stockSelected } = props
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0);
      }, [stockSelected]);

    return (
        <div className="item-counter">
            <div className="counter">
                <p>{count}</p>
                <div className="counter-btn">
                    <button onClick={() => { if (count < stockSelected) setCount(count + 1) }} className={count === stockSelected ? "sm-btn" : "sm-btn-primary"}>+</button>
                    <button onClick={() => { if (count > 0) setCount(count - 1) }} className={count === 0 ? "sm-btn" : "sm-btn-primary"}>-</button>
                </div>
            </div>
            <button className="btn-primary add-to-cart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount