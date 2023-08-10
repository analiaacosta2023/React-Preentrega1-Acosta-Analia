import "./ItemCount.scss"
import React, { useState, useEffect } from 'react'



function ItemCount(props) {

    const { stockSelected } = props
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(1);
    }, [stockSelected]);

    function handleClickAdd() {
        if (count < stockSelected) {setCount(count + 1)}
    }

    function handleClickSub() {
        if (count > 1) {setCount(count - 1)}
    }

    return (
        <div className="item-counter">
            <div className="counter">
                <p>{count}</p>
                <div className="counter-btn">
                    <button onClick={handleClickAdd} className={count === stockSelected ? "sm-btn" : "sm-btn-primary"}>+</button>
                    <button onClick={handleClickSub} className={count === 1 ? "sm-btn" : "sm-btn-primary"}>-</button>
                </div>
            </div>
            <button onClick={() => props.onConfirm(count)} className="btn-primary add-to-cart">AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount