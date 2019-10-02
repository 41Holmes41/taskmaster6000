import React from 'react';
import './Card.css'

const Card= () => {
      return (
        <div class="card m-1 rounded" >
        <div class="row no-gutters">
          <div class="col-md-4 col-2">
            <img src="http://www.iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico" class="card-img" alt=""/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Group: </p>
              <p class="card-text">Points: </p>
              <p class="card-text"><small class="text-muted">3 hours till due date</small></p>
            </div>
          </div>
        </div>
      </div>
      );
};



export default Card;