import React from 'react';
import Card from './TaskCard'

const Cards = (props) => {
    return (
      <div className="container bg-light margin border border shadow p-3 mb-5">
      <h1>Your Current Tasks</h1>
      <div className="card-group">
        <Card items={props.tasks}/>
      </div>
      </div>
    )
}

export default Cards;