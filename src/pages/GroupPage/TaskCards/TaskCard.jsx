import React from 'react';
import { Link } from 'react-router-dom';
import EditTaskForm from './EditTaskForm';
import taskService from '../../../utils/taskService'


class Card extends React.Component {  
  
  
  deleteTask = async (e) => {
    e.preventDefault();
    try {
      // await taskService.add(props.availableTask._id)
    } catch (err) {
      console.log("create task error at createtask.jsx addtasksubmit", err)
    }
  }


  
  render() {

    let functionButton= null

    if(this.props.userId == this.props.availableTask.creator){
  
      functionButton =
      <div> 
        <p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={'#'+ this.props.availableTask.name} aria-expanded="false" aria-controls={this.props.availableTask.name}>
            edit
          </button>
          <button onClick={this.deleteTask} class="btn btn-primary" type="button">Delete</button>
        </p>
        <div class="collapse" id={this.props.availableTask.name}>
          <EditTaskForm 
            taskId= {this.props.availableTask._id}
          />
        </div>
      </div>

    } else {
      functionButton = <Link className="btn btn-primary" onClick={this.addTask}>add</Link> 
    }

    if(this.props.availableTask){
      return (
        <div className="card m-1 rounded" >
        <div className="row no-gutters">
          <div className="col-md-4 col-2">
            <img src="http://www.iconarchive.com/download/i78247/igh0zt/ios7-style-metro-ui/MetroUI-Other-Task.ico" className="card-img" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.availableTask.name}</h5>
              <p className="card-text">{this.props.availableTask.description}</p>
              <p className="card-text">{this.props.availableTask.points} Points </p>
              <p className="card-text"><small className="text-muted">3 hours till due date</small></p>
              {functionButton}              
            </div>
          </div>
        </div>
      </div>
    )
      } else {
        return (<div>No Tasks!</div>)
      }
    }
};



export default Card;