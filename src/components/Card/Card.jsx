import React from 'react';
import './Card.css'

const Card= () => {
      return (
        <div className="card m-1 rounded" >
        <div className="row no-gutters">
          <div className="col-md-4 col-2">
            <img src="http://www.iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico" className="card-img" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Group: </p>
              <p className="card-text">Points: </p>
              <p className="card-text"><small className="text-muted">3 hours till due date</small></p>
            </div>
          </div>
        </div>
      </div>
      );
};



export default Card;