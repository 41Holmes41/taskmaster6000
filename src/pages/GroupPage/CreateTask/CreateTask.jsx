import React from 'react';
import taskService from '../../../utils/taskService';
import { equal } from 'assert';

class CreateTask extends React.Component {

  constructor() {
    super();
    this.state= {
        name: "",
        description: "",
        groups: null,  
    }
  }

  componentDidUpdate() {
    if(this.props.groups!= this.state.groups){
    this.setState({groups: this.props.groups})
    }
  }

  handleNewTaskInputChange = e => {
    this.setState({[e.target.name]: e.target.value});  
  }

  addTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await taskService.create(this.state)
      this.setState({
          name: "",
          description: "",
          groups: ""
      })
    } catch (err) {
      console.log("create task error at createtask.jsx addtasksubmit", err)
    }

  }

  render() {
  return (
    <form
      onSubmit={this.addTaskSubmit}
    >

      <div className="form-group row">
        <label for="taskname" className="col-sm-2 col-form-label">Task Name</label>
        <div className="col-sm-10">
          <input 
            onChange={this.handleNewTaskInputChange} 
            type="text" 
            className="form-control" 
            id="taskname" 
            name="name" 
            value={this.state.name} 
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input 
            onChange={this.handleNewTaskInputChange} 
            type="text" 
            className="form-control" 
            id="description" 
            name="description"  
            value={this.state.description} 
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-2">Select Groups</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="gridCheck1"
              name="groups"
              onChange={this.state.handleInputChange}
            />
            <label 
              input 
              className="form-check-label" 
              for="gridCheck1"
            >
              Group 1
            </label>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10">
          <button 
            className="btn btn-primary"
          >Submit Task</button>
        </div>
      </div>

    </form>
  );
  }
};

export default CreateTask;