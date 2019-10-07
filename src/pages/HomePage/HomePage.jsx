import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron border shadow p-3 mb-5 rounded">
        
          <h1 class="display-4"><img src="https://image.flaticon.com/icons/svg/1293/1293034.svg" width="60" height="60" alt=""></img>Taskmaster 6000</h1>
          <p class="lead">The future of stress free productivity</p>
          <Link type="button" className="btn btn-dark" to="/signup">Signup<span className="sr-only">(current)</span></Link>
        </div>
      
      <div class="row justify-content-md-center margin">
    <div class="col-md-4">
    <img src="https://www.roberthalf.com/sites/default/files/styles/full_width_content_image_1x_small_480/public/2018-11/teamwork-in-the-workplace-rh.jpg?itok=FFj0w2-6" class="  card-img-top" alt="Responsive image"></img>
    </div>
    <div class="col col-lg-8 border shadow p-3 mb-5 rounded">
    <h1>Incentivize Tasks</h1>
            <p class="lead">Taskmaster 6000 reinvents the notion of a "task".  Assigning tasks to employees or students can be a burdensome effort.  We are reinventing the dynamic between bosses, teachers, and parents and their loved ones.  We aim to make tasks in the workplace, classroom and home a rewarding experience for everyone involved! </p>
    </div>
  </div>


      <div class="row justify-content-md-center margin">
    <div class="col-md-8 border border shadow p-3 mb-5">
      <h1>Stress Free Productivity</h1>
      <p class="lead">TaskMaster is a simple and flexible method for managing your day-to-day tasks or activities, so as to
maximize personal productivity. The intended result of applying TaskMaster is being able to keep up
with a high workflow in a relaxed manner.</p>
    </div>
    <div class="col col-lg-4">
    <img src="https://www.teachhub.com/sites/default/files/field/image/benefits-technology-in-the-classroom.jpg" class="rounded float-left img-fluid" alt="Responsive image"></img>
    </div>
  </div>


      <div class="row justify-content-md-center margin">
    <div class="col-md-4">
    <img src="https://www.projectormeetings.com/wp-content/uploads/2011/01/meeting-technology.jpg" class="rounded float-left img-fluid" alt="Responsive image"></img>
    </div>
    <div class="col-lg-8 border border shadow p-3 mb-5">
      <h1>Adaptable and Flexible</h1>
    <p class="lead">TaskMaster is desinged to be intuitive and adaptable to your task management needs.  Teachers, employers and even families are now experiencing the stress free life!</p>
    </div>
  </div>

       

{/*       <div class="row">
        <div class="col">
          1 of 3
          <img src="https://www.projectormeetings.com/wp-content/uploads/2011/01/meeting-technology.jpg" class="rounded float-left img-fluid" alt="Responsive image"></img>
        </div>
        <div class="col-md-auto">
          Variable width content
        </div>
        <div class="col col-lg-2">
          3 of 3
        </div>
      </div> */}


      </div>
    );
  };
};

export default HomePage;