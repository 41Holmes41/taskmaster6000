import React from 'react';
import TaskCard from './TaskCard'

const Cards = (props) => {
  if (props.availableTasks) {
    return (
      <div className="container bg-light margin border border shadow p-3 mb-5">
      <h1>{props.title}</h1>
      <div className="card-group">
        {props.availableTasks.map(availableTask => (
        <TaskCard availableTask={availableTask} userId={props.userId}/>
        ))}
      </div>
      </div>
    )
        } else {
          return(
          <div>There are no tasks!</div>
          )
        }
}

export default Cards;