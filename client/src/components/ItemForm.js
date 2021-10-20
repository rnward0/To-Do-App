import React from 'react';
import './styling/ItemForm.css';

export default class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    onChange = e => {
        this.setState({
            content: e.target.value
        });
    }

     addItem = e => {
        this.props.addItem(e, this.state.content);
        this.setState({
            content: ""
        });
     }

    render = () => {
        return (
            <form className="form">
                <input
                    type="text"
                    value={this.state.content}
                    onKeyPress={e => e.key === 'Enter' ? this.addItem(e) : null}
                    onChange={e => this.onChange(e)}
                />
                <button onClick={e => this.addItem(e)} >Add</button>
            </form>
        );
    }
}