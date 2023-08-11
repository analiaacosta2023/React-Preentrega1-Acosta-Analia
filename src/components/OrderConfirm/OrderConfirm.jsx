import React, { useState, useEffect } from 'react'
import "./OrderConfirm.scss"
import Loader from "../Loader/Loader";
import { Link, useParams } from 'react-router-dom'
import { getOrder } from "../../services/firebase";

function OrderConfirm() {

    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams()
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        getOrder(id).then((order) => {
            setOrderData(order);
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching order:", error);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (<div className="bg-primary-light-8 items-container loader">
            <Loader />
        </div>)
    } else {
        return (
            <div className='container bg-primary-light-8 p-2 items-container loader'>
                <h2>Gracias por tu compra</h2>
                <h3>Tu código de orden es {id}</h3>
                
                {orderData && orderData.items ? ( 
                    <div>
                    <p>Tus productos comprados:</p>
                        {orderData.items.map((item) => (
                            <small key={`${item.id}-${item.size}`}> 
                                {item.nombre} - Talle: {item.size} - {item.count} unidades
                            </small>
                        ))}
                    
                    </div>
                ) : (
                    <p>No se encontraron productos en la orden.</p>
                )}
                <div className="home-btn">
                    <Link className='btn-outlined-primary' to="/">
                        VOLVER AL INICIO
                    </Link>
                </div>

            </div>
        )
    }
}

export default OrderConfirm