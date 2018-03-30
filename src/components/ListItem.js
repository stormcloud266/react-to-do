import React from 'react';
import ReactDOM from 'react-dom';

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

const aStyle = {
  cursor: 'pointer'
},
ptb10 = {
  padding: '8px 0'
};

export default ListItem;
