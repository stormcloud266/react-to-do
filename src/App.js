
class App extends React.Component {
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
    this.setState((prevState) => ({ items: prevState.items.concat(items) }));
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

const ListItems = (props)=> {
    return (
      <div className="row">
        {
          props.items.map((item,index) => (
            <ListItem
              item={item}
              index={index}
              removeItem={props.removeItem}
            />
          ))
        }
      </div>
    )
}

const ListItem = (props) => {
    return (
      <div className="col s6 offset-s3 left-align" style={ptb10}>
        <input type="checkbox" className="filled-in" id={props.item} />
        <label className="white-text" for={props.item}>{props.item}</label>
        <a
          style={aStyle}
          className="teal-text darken-2 right"
          onClick={(e) => {
            props.removeItem(props.item)
        }}
        >
          remove
        </a>
      </div>
    );
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
}

ReactDOM.render(<App />, document.getElementById('app'))
