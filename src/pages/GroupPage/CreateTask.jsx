import React from 'react';

const CreateTask = (props) => {
  return (
    <form>
      <div class="form-group row">
        <label for="taskname" class="col-sm-2 col-form-label">Task Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="taskname" placeholder="hello" />
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="description" placeholder="Enter Description of Task" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2">Select Groups</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" />
            <label class="form-check-label" for="gridCheck1">
              Group 1
        </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Submit Task</button>
        </div>
      </div>

    </form>
  );
};

export default CreateTask;