import React from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:8000/items')
      .then(res => {
        if(res.status !== 200) { 
          throw new Error("Error fetching to-do items");
        }
        return res.json();
      })
      .then(res => {
        this.setState({
          itemList: res.items
        });
      })
      .catch(err => console.log(err));
  }

  addItem = (e, content) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: content })
    }
    fetch('http://localhost:8000/add-item', requestOptions)
      .then(res => {
        if(res.status !== 201) {
          throw new Error("Error adding to-do item");
        }
        fetch('http://localhost:8000/items')
          .then(res => {
            if(res.status !== 200) { 
              throw new Error("Error fetching to-do items");
            }
            return res.json();
          })
          .then(res => {
            this.setState({
              itemList: res.items
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  deleteItem = id => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    }
    fetch('http://localhost:8000/delete-item', requestOptions)
      .then(res => {
        if(res.status !== 200) {
          throw new Error("Error deleting to-do item");
        }
        fetch('http://localhost:8000/items')
          .then(res => {
            if(res.status !== 200) { 
              throw new Error("Error fetching to-do items");
            }
            return res.json();
          })
          .then(res => {
            this.setState({
              itemList: res.items
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  
  render = () => {
    return (
      <div className="appContainer">
        <h1>To-Do List</h1>
        <ItemForm addItem={this.addItem} />
        <ItemList itemList={this.state.itemList} deleteItem={this.deleteItem} />
      </div>
    );
  }
}