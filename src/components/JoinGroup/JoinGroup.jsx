import React from 'react';

const JoinGroup = (props) => {
  return (
    <form
      onSubmit={props.addJoinGroup}
    >
      <div className="form-group row">
        <label for="groupname" className="col-sm-2 col-form-label">Group Name</label>
        <div className="col-sm-10">
          <input 
            onChange={props.handleJoinGroupInputChange}
            type="text" 
            className="form-control" 
            id="groupname"
            name="joinGroupName"
            value={props.joinGroupName} 
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input 
            onChange={props.handleJoinGroupInputChange}
            type="password" 
            className="form-control" 
            id="inputPassword3" 
            name="joinGroupPassword"
            value={props.joinGroupPasssword} 
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button className="btn btn-primary">Join Group</button>
        </div>
      </div>

    </form>
  );
};

export default JoinGroup;