import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

const ListItems = (props)=> {
    return (
      <div className="row">
        {
          props.items.map((item) => (
            <ListItem
              key={item}
              item={item}
              removeItem={props.removeItem}
            />
          ))
        }
      </div>
    )
}

export default ListItems;
