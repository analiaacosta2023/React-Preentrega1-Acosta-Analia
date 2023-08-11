import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { getData, getColeccionData } from "../../services/firebase"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);

    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState()

    const [products, setProducts] = useState([]);

    const { coleccion } = useParams()

    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        setIsLoading(true);
        async function requestProducts() {
            let respuesta = [];

            if (coleccion === undefined) {
                respuesta = await getData();
                setTitle("Bienvenid@ a Ana Random Store");
                setSubtitle("Tienda de zapatos de diseño");
            } else {
                respuesta = await getColeccionData(coleccion);
                setTitle(`Colección ${coleccion}`);
                setSubtitle("Temporada 2023");
            }
            setProducts(respuesta);
            setIsLoading(false);
        }

        requestProducts();
    }, [coleccion]);

    const handleShowMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };

    if (isLoading) {
        return (<div className="bg-primary-light-8 items-container loader">
            <Loader />
        </div>)
    } else {
        return (
            <div className="container bg-primary-light-8 item-list items-container loader">
                {products.length !== 0 ? (<>
                    <div className="banner">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                    </div>

                    <ItemList products={products.slice(0, visibleProducts)}></ItemList>
                    {visibleProducts < products.length && (<button className="btn-complement-primary" onClick={handleShowMore}>MOSTRAR MÁS</button>)}
                </>) : (
                    <h2>No hay productos en la categoría especificada</h2>
                )}
            </div>
        )
    }
}


export default ItemListContainer