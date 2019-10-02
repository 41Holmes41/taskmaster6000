import React from 'react';
import ListCard from '../../components/Card/ListCard'
import './Leaderboard.css'

const VerticalUserDisplay = (props) => {
  return (
    <div className=" container bg-light margin border border shadow p-3 mb-5" >
      <h3> {props.title}</h3>
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
    </div>
  )
}

export default VerticalUserDisplay;