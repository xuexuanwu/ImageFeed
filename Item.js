import React, { Component } from 'react';

function Item(props) {
  return(
    <div className="Item">
      <div>{props.post.title}</div>  
      <img src={props.post.url} alt={props.post.title}/>
    </div>
  );
}

export default Item;