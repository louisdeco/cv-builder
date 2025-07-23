import './ItemList.css'
import ItemCard from './ItemCard.jsx'

function ItemList({ items, displayField, name, onToggleVisibility, onEditClick, onAddClick}) {

    return (
        <div className="item-list">
            {items.map(item => {
                return <ItemCard item={item} displayField={displayField} key={item.id} onToggleVisibility={onToggleVisibility} onEditClick={onEditClick} />
            })}
            <div className="footer">
                <button className="add-item" onClick={onAddClick}>
                    <span className="material-symbols-outlined">add</span>
                    <span>{name}</span>
                </button>
            </div>
        </div>
    )
}

export default ItemList;