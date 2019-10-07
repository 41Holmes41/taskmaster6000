import React from 'react';

const CreateGroup =(props) => {
      return (
        <form
          onSubmit={props.addGroup}
        >

          <div className="form-group row">
            <label for="groupname" className="col-sm-2 col-form-label">Group Name</label>
            <div className="col-sm-10">
              <input 
                onChange={props.handleCreateGroupInputChange}
                type="text" 
                className="form-control" 
                id="groupname" 
                name="newGroupName"
                value={props.newGroupName} 
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input 
                onChange={props.handleCreateGroupInputChange}
                type="text" 
                className="form-control" 
                id="description" 
                name="newGroupDescription"
                value={props.newGroupDescription} 
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input 
                onChange={props.handleCreateGroupInputChange}
                type="password" 
                className="form-control" 
                id="inputPassword3" 
                name="newGroupPassword"
                value={props.newGroupPassword} 
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button className="btn btn-primary">Submit Group</button>
            </div>
          </div>
        </form>
      );
  };

export default CreateGroup;