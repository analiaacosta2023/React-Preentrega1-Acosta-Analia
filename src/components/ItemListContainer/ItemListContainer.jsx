import "./ItemListContainer.scss"

function ItemListContainer (props) {
    const {greetings, children} = props;
    return (
        <div className="container bg-primary-light-8 p-2">
            <h1 className="text-secondary">{greetings}</h1>
            <p>{children}</p>
        </div>
    )
}

export default ItemListContainer