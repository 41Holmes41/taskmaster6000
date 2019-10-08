import React from 'react';
import GroupCard from './GroupCard'


const Cards = (props) => {
    return (
      <div className="container bg-light margin border border shadow p-3 mb-5">
      <h1>Your Groups</h1>
      <div className="card-group">
        <GroupCard groups={props.groups}/>
      </div>
      </div>
    )
}

export default Cards;