import React from 'react';
import { Link } from 'react-router-dom';

const Card= (props) => {

    return (
      props.groups.map(group => (
        <Link to={'/group/' +group._id}>
        <div className="card m-1 rounded" >
        <div className="row no-gutters">
          <div className="col-md-4 col-2">
            <img src="http://www.iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico" className="card-img" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{group.name}</h5>
              <p className="card-text">{group.description} </p>
              <p className="card-text">Available Tasks: {group.availableTasks.length}  </p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    )
    ))
};



export default Card;