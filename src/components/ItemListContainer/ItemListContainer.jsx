import ProductCard from "../ProductCard/ProductCard";
import "./ItemListContainer.scss"

function ItemListContainer (props) {
    const {greetings, children} = props;
    return (
        <div className="container bg-primary-light-8 p-2">
            <h1 className="text-secondary">{greetings}</h1>
            <p>{children}</p>
            <ProductCard imagen="img/p1.jpeg" coleccion="Flamingo" nombre="Woman Clog" precio="99"></ProductCard>
        </div>
    )
}

export default ItemListContainer