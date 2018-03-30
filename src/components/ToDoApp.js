import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './ListItems';
import ListItem from './ListItem';

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      items: []
    }
  }

  addItem(items) {
    if (this.state.items.indexOf(items) > -1) {
      console.log('item already exists');
      return;
    }
    this.setState((prevState) => ({
      items: prevState.items.concat(items),
      id: ++prevState.id
    }));
  }

  removeItem(itemToRemove) {
    this.setState((prevState) => ({
        items: prevState.items.filter((item) => itemToRemove !== item)
    }));
  }

  render() {
    return (
      <div>
        {console.log(this.state.items)}
        <h1 style={h1Style}>To Do</h1>
        <ListItems items={this.state.items} removeItem={this.removeItem}/>
        <AddListItem addItem={this.addItem}/>
      </div>
    )
  }
}




class AddListItem extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const value = event.target.item.value.trim();
    if (value) {
      this.props.addItem(value);
    }
    event.target.item.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <div className="row">
            <input type="text" name="item" autocomplete="off" className="validate col s6 offset-s3"/>
          </div>
          <button className="btn" style={bottomButton}>add</button>
        </form>
      </div>
    )
  }
}

const aStyle = {
  cursor: 'pointer'
},
ptb10 = {
  padding: '8px 0'
},
h1Style = {
  fontSize: '3.4rem',
  fontWeight: '200',
  padding: '50px 0'
},
bottomButton = {
  marginBottom: '160px'
},
red = {
  color: 'red'
},
green = {
  color: 'green'
}
