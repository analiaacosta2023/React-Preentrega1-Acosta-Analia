import React, { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./StockDisplay.scss"
import { cartContext } from '../../context/cartContext'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'

function StockDisplay(props) {
    const { product } = props

    const [size, setSize] = useState("")
    const [maxItems, setMaxItems] = useState(0)

    const { addToCart, getItemInCart } = useContext(cartContext);

    const itemInCart = getItemInCart(product.id, size);

    useEffect(() => {

        function selectStock() {
            if (size) {

                let stock = product.stock[size - 35]
                if (itemInCart) {
                    stock = stock - itemInCart.count
                }

                setMaxItems(stock)
            }
        }
        selectStock();
    }, [size, product, itemInCart]);

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    function handleAddToCart(clickCount) {
        addToCart(product, size, clickCount);
        toast.success(`Producto agregado al carrito, talle: ${size}, cantidad: ${clickCount}`);
        setIsAddedToCart(true);
    }

    function handleShopMore() {
        setSize("");
        setIsAddedToCart(false);
    }


    return (
        <div className='stock-display'>
            {!isAddedToCart && (
                <div className='size-selector'>
                    <h6>Talle:</h6>
                    <select value={size} onChange={e => setSize(e.target.value)}>
                        <option value="" disabled>Seleccione talle</option>
                        <option value={35} className='btn-outlined-primary'>35</option>
                        <option value={36} className='btn-outlined-primary'>36</option>
                        <option value={37} className='btn-outlined-primary'>37</option>
                        <option value={38} className='btn-outlined-primary'>38</option>
                        <option value={39} className='btn-outlined-primary'>39</option>
                        <option value={40} className='btn-outlined-primary'>40</option>
                    </select>
                </div>
            )}

            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />

            {size && (maxItems > 0 ? (
                isAddedToCart ? (
                    <div>
                        <Link to="/cart" className='btn-complement-primary'>IR AL CARRITO</Link>
                        <button onClick={handleShopMore} className='btn-outlined-primary ml-1'>COMPRAR MÁS</button>
                    </div>
                ) : (
                    <ItemCount stockSelected={maxItems} onConfirm={handleAddToCart} />
                )) : (
                <div>
                    <p className='text-gray'>No hay stock disponible</p>
                </div>


            ))}
            {itemInCart && (
                <p className='text-primary-dark-3'>Ya agregaste {itemInCart.count} de este producto en talle {itemInCart.size}</p>
            )}
        </div >
    )
}

export default StockDisplay