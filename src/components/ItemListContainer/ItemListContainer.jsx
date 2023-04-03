import ItemList from "../ItemList/ItemList"
import "./itemListContainer.css"

const ItemListContainer = ({greeting})=> {
    return(
        <>
            <h2>{greeting}</h2>
            <ItemList/>
        </>
    )
}
export default ItemListContainer