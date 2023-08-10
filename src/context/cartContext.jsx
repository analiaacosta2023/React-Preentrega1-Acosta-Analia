import React from 'react'
import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, size, count) {
    const newCart = [...cart];
    if (isInCart(product.id, size)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id && item.size === size);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...product, size, count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id, size) {
    return cart.some((item) => item.id === id && item.size === size);
  }

  function getItemInCart(id, size) {
    return cart.find((item) => item.id === id && item.size === size);
  }

  function removeItem(id, size) {
    setCart(cart.filter((item) => (item.id !== id || item.size !== size)));
  }

  function clearCart() {
    setCart([])
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.precio;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        getItemInCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };