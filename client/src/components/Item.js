import React from 'react';
import './styling/Item.css';

const Item = ({ item: item, deleteItem: deleteItem }) => {
    return (
        <div className="itemContainer">
            { item.content }
            <button className="doneButton" onClick={() => deleteItem(item._id)}>Done</button>
        </div>
    );
}

export default Item;