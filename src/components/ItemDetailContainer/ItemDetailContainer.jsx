import React, { useState, useEffect } from 'react'
import "./ItemDetailContainer.scss"
import { getProductData } from "../../services/firebase"
import { Link, useParams } from 'react-router-dom'
import StockDisplay from '../StockDisplay/StockDisplay'
import Loader from "../Loader/Loader";

function ItemDetailContainer() {

  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    setIsLoading(true);
    async function requestProduct() {
      let respuesta = [];
      respuesta = await getProductData(productId);
      setProducto(respuesta);
      setIsLoading(false);
    }
    requestProduct();
  }, [productId]);

  if (isLoading) {
    return (<div className="bg-primary-light-8 items-container loader">
      <Loader />
    </div>)
  } else {

    return (
      <div className='container bg-primary-light-8 p-2 items-container loader'>
        {producto ? (
          <div className='single-product'>
            <img src={producto.link_foto} alt="imagen" />

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
          </div>
        ) : (
          <h2>Error 404: No existe el producto {productId}</h2>
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

export default ItemDetailContainer