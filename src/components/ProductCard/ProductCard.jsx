import "./ProductCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
    const { imagen, coleccion, nombre, precio } = props;
    return (
        <div className="product-card-outlined-primary">
            <img src={imagen} alt="" />
            <div className="des">
                <span className="text-secondary">Colección {coleccion}</span>
                <h5>{nombre}</h5>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <h4>$ {precio}</h4>
            </div>
            <a href="#" className="text-hover-white text-secondary" ><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
    )
}

export default ProductCard