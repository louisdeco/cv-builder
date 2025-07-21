import { useState } from 'react';
import './ItemList.css'
import ItemCard from './ItemCard.jsx'

function ItemList({ items, onToggleVisibility, onEditClick, onAddClick}) {

    return (
        <div className="item-list">
            {items.map(job => {
                return <ItemCard item={job} key={job.id} onToggleVisibility={onToggleVisibility} onEditClick={onEditClick} />
            })}
            <div className="footer">
                <button className="add-item" onClick={onAddClick}>
                    <span className="material-symbols-outlined">add</span>
                    <span>Experience</span>
                </button>
            </div>
        </div>
    )
}

export default ItemList;