import React from 'react';
import MemberCard from './MemberCard'

const Cards = (props) => {
    return (
      <div className="container bg-light margin border border shadow p-3 mb-5">
      <h1>{props.title}</h1>
      <div className="card-group">
        <MemberCard items={props.tasks}/>
      </div>
      </div>
    )
}

export default Cards;