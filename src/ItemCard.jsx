import './ItemCard.css'

function ItemCard({ item, displayField, onToggleVisibility, onEditClick }) {
    const getIsVisibleIcon = () => item.isVisible ? 'visibility' : 'visibility_off';

    return (
        <div className="item-card">
            <button className="item-main" onClick={() => onEditClick(item.id)}>
                <h3>{item[displayField]}</h3>
            </button>
            <button className="toggle-visibility" onClick={() => onToggleVisibility(item.id)}>
                <span className="material-symbols-outlined">{getIsVisibleIcon()}</span>
            </button>
        </div>
    )
}

export default ItemCard;