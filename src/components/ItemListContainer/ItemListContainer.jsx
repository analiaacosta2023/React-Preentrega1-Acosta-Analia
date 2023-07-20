import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import getData, { getColeccionData } from "../../services/asyncMock"
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState()

    const [products, setProducts] = useState([]);

    const { coleccion } = useParams()
    useEffect(() => {
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
        }

        requestProducts();
    }, [coleccion]);


    return (
        <div className="container bg-primary-light-8 p-2">
            <div className="banner">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer