import React from 'react'
import Item from "../Item/Item"
import "./ItemList.scss"


function ItemList(props) {

    const { products } = props

    const productList = products.map(producto => <Item key={producto.id} producto={producto}></Item>)

    return (
        <div className="pro-container">{productList}</div>
    )
}

export default ItemList