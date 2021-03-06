import React from 'react';
import Card from '../Card/Card'
import "./Cards.css"

const Cards = (props) => {
    return (
      <div className="container bg-light margin border border shadow p-3 mb-5">
      <h1>{props.title}</h1>
      <div className="card-group">
        <Card items={props.items}/>
      </div>
      </div>
    )
}

export default Cards;