import React from 'react';
import Item from './Item';
import './styling/ItemList.css';

const ItemList = ({ itemList: itemList, deleteItem: deleteItem}) => {
    return (
        <ul className="listContainer">
            {itemList.map((item, index) => 
                <Item key={index} id={item.id} item={item} deleteItem={deleteItem} />
            )}
        </ul>
    );
}

export default ItemList;