import React, { useState, useContext } from 'react'
import "./Checkout.scss"
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import Loader from "../Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Checkout() {

  const [isLoading, setIsLoading] = useState(false);

  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  const [card, setCard] = useState({
    name: "",
    number: "",
    CVV: "",
    EM: "",
    EY: "",
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart, clearCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();

    if (cart.length === 0) {
      toast.error(`Carrito vacio`);
      return
    }

    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      setIsLoading(true)
      const idOrder = await createOrder(orderData);
      clearCart();
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
      setIsLoading(false)
    }
  }

  function onInputChangeBuyer(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function onInputChangeCard(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...card };
    newState[field] = value;
    setCard(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
    });

    setCard({
      name: "",
      number: "",
      CVV: "",
      EM: "",
      EY: "",
    });
  }

  function areFieldsEmpty(fields) {
    return Object.values(fields).some(value => value === "");
  }
  
  const isBuyerFieldsEmpty = areFieldsEmpty(buyer);
  const isCardFieldsEmpty = areFieldsEmpty(card);


  if (isLoading) {
    return (<div className="bg-primary-light-8 items-container loader">
      <h2>Su orden se esta procesando</h2>
      <Loader />
    </div>)
  } else {
    return (

      <div className='container bg-primary-light-8 p-2 items-container'>

        <div className="banner">
          <h1>Finalizar compra</h1>
          <h2>Completa tus datos para finalizar compra</h2>
        </div>

        <div className='checkout-container'>
          <form className='bg-secondary-light-9'>
            <div className='checkout-form'>

              <h3 className='col3'>Comprador:</h3>

              <input
                className='col3'
                name='firstname'
                placeholder='Nombre'
                value={buyer.firstname}
                onChange={onInputChangeBuyer}
              />
              <input
                className='col3'
                name='lastname'
                placeholder='Apellido'
                value={buyer.lastname}
                onChange={onInputChangeBuyer}
              />
              <input
                className='col3'
                name='email'
                placeholder='Email'
                value={buyer.email}
                onChange={onInputChangeBuyer}
              />
              <input
                className='col3'
                name='address'
                placeholder='Dirección'
                value={buyer.address}
                onChange={onInputChangeBuyer}
              />
              <h3 className='col3'>Tarjeta:</h3>
              <input
                className='col3'
                name='name'
                placeholder='NOMBRE'
                value={card.name}
                onChange={onInputChangeCard}
              />

              <input
                className='col2'
                name='number'
                placeholder='NÚMERO'
                value={card.number}
                onChange={onInputChangeCard}
              />

              <input
                name='CVV'
                placeholder='CVV'
                value={card.CVV}
                onChange={onInputChangeCard}
              />
              <h4>Vencimiento:</h4>

              <input
                name='EM'
                placeholder='MM'
                label="Expiry Month"
                value={card.EM}
                onChange={onInputChangeCard}
              />

              <input
                name='EY'
                placeholder='AAAA'
                label="Expiry Year"
                value={card.EY}
                onChange={onInputChangeCard}
              />
            </div>
            <div className='botones'>
              <button disabled={isBuyerFieldsEmpty || isCardFieldsEmpty}
                onClick={handleCheckout} className={(isBuyerFieldsEmpty || isCardFieldsEmpty) ? 'display-none' : 'btn-secondary text-white'}>COMPLETAR ORDEN</button>
              <button onClick={resetForm} className='btn-outlined-secondary'>CANCELAR</button>
            </div>
          </form>

        </div>
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
      </div>
    )
  }
}

export default Checkout