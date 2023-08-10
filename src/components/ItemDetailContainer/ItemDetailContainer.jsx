import React, { useState, useEffect } from 'react'
import "./ItemDetailContainer.scss"
import { getProductData } from "../../services/asyncMock"
import { Link, useParams } from 'react-router-dom'
import StockDisplay from '../StockDisplay/StockDisplay'

function ItemDetailContainer() {
  const { productId } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    async function requestProduct() {
      let respuesta = [];
      respuesta = await getProductData(productId);
      setProducto(respuesta);
    }
    requestProduct();
  }, [productId]);

  return (
    <div className='container bg-primary-light-8 p-2 single-product'>

      <img src={producto.link_foto} alt="imagen"/>

      <div className="single-pro-details">
        <h4>Colección {producto.coleccion}</h4>
        <h2>{producto.nombre}</h2>
        <h6>$ {producto.precio}</h6>
        <StockDisplay product={producto} />
      </div>

      <div className='pro-description'>
        <h6>Descripción:</h6>
        <span>{producto.descripcion}El modelo más buscado, más usado, más amado por nuestros fans. Quien no tiene una, dos o tres? Con
          colores clásicos o atrevidos, el zueco y banda son la combinación perfecta. Material Croslite™
          moldeado.</span>
      </div>

      <div className="home-btn">
        <Link className='btn-outlined-primary'to="/">
          VOLVER AL INICIO
        </Link>
      </div>
      

    </div>
  )
}

export default ItemDetailContainer