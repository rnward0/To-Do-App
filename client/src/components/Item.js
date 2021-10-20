import React from 'react';
import './styling/Item.css';

const Item = ({ item: item, id: id, deleteItem: deleteItem }) => {
    return (
        <div className="itemContainer">
            { item.content }
            <button className="doneButton" onClick={() => deleteItem(id)} >Done</button>
        </div>
    );
}

export default Item;