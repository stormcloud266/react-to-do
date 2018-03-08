"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.addItem = _this.addItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "addItem",
    value: function addItem(items) {
      if (this.state.items.indexOf(items) > -1) {
        console.log('item already exists');
        return;
      }
      this.setState(function (prevState) {
        return { items: prevState.items.concat(items) };
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemToRemove) {
      this.setState(function (prevState) {
        return {
          items: prevState.items.filter(function (item) {
            return itemToRemove !== item;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        console.log(this.state.items),
        React.createElement(
          "h1",
          { style: h1Style },
          "To Do"
        ),
        React.createElement(ListItems, { items: this.state.items, removeItem: this.removeItem }),
        React.createElement(AddListItem, { addItem: this.addItem })
      );
    }
  }]);

  return App;
}(React.Component);

var ListItems = function ListItems(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.items.map(function (item, index) {
      return React.createElement(ListItem, {
        item: item,
        index: index,
        removeItem: props.removeItem
      });
    })
  );
};

var ListItem = function ListItem(props) {
  return React.createElement(
    "div",
    { className: "col s6 offset-s3 left-align", style: ptb10 },
    React.createElement("input", { type: "checkbox", className: "filled-in", id: props.item }),
    React.createElement(
      "label",
      { className: "white-text", "for": props.item },
      props.item
    ),
    React.createElement(
      "a",
      {
        style: aStyle,
        className: "teal-text darken-2 right",
        onClick: function onClick(e) {
          props.removeItem(props.item);
        }
      },
      "remove"
    )
  );
};

var AddListItem = function (_React$Component2) {
  _inherits(AddListItem, _React$Component2);

  function AddListItem(props) {
    _classCallCheck(this, AddListItem);

    var _this2 = _possibleConstructorReturn(this, (AddListItem.__proto__ || Object.getPrototypeOf(AddListItem)).call(this, props));

    _this2.addItem = _this2.addItem.bind(_this2);
    return _this2;
  }

  _createClass(AddListItem, [{
    key: "addItem",
    value: function addItem(event) {
      event.preventDefault();
      var value = event.target.item.value.trim();
      if (value) {
        this.props.addItem(value);
      }
      event.target.item.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.addItem },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement("input", { type: "text", name: "item", autocomplete: "off", className: "validate col s6 offset-s3" })
          ),
          React.createElement(
            "button",
            { className: "btn", style: bottomButton },
            "add"
          )
        )
      );
    }
  }]);

  return AddListItem;
}(React.Component);

var aStyle = {
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
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
