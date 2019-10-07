import React from 'react';

const CreateTask = (props) => {
  return (
    <form
      onSubmit={props.addTask}
    >

      <div className="form-group row">
        <label for="taskname" className="col-sm-2 col-form-label">Task Name</label>
        <div className="col-sm-10">
          <input 
            onChange={props.handleNewTaskInputChange} 
            type="text" 
            className="form-control" 
            id="taskname" 
            name="newTaskName" 
            value={props.newTaskName} 
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input 
            onChange={props.handleNewTaskInputChange} 
            type="text" 
            className="form-control" 
            id="description" 
            name="newTaskDescription"  
            value={props.newTaskDescription} 
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
              name="newTaskGroups"
              onChange={props.handleInputChange}
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
};

export default CreateTask;