import React from 'react'
import "./CartView.scss"
import CartItem from '../CartItem/CartItem'
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'



function CartView() {

  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

  return (
    <div className="container bg-primary-light-8 p-2 items-container">

      <div className="banner-cart">
        <h1>Tu carrito</h1>
      </div>

      {cart.length === 0 ? (
        <div className='empty-cart'>
          <h2>No agregaste productos al carrito</h2>
          <Link to='/' className='btn-complement-primary'>IR A LA TIENDA</Link>
        </div>

      ) : (
        <div className='cart-container'>

          <div id='cart'>
                          {cart.map((item) => (
                <CartItem key={`${item.id}-${item.size}`} item={item} onConfirm={removeItem} />
              ))}
          </div>

          <div id="subtotal">
            <h3>Total</h3>
            <h3>$ {getTotalPriceInCart()}</h3>
            <Link to='/checkout' className="btn-complement-primary">FINALIZAR COMPRA</Link>
            <Link to='/' className="btn-outlined-primary">SEGUIR COMPRANDO</Link>
          </div>
        </div>

      )}


    </div>
  )
}

export default CartView