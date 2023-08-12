import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
    const { item } = props
    return (
        <div className='cart-item'>
            <FontAwesomeIcon icon={faTimesCircle} className='close' onClick={() => props.onConfirm(item.id, item.size)} />
            <img src={item.link_foto} alt="" />
            <div className='des'>
                <h2>{item.nombre}</h2>
                <h4>Precio: {item.precio}</h4>
                <h4>Talle: {item.size}</h4>
                <h4>Cantidad: {item.count}</h4>
            </div>
        </div>
    )
}

export default CartItem