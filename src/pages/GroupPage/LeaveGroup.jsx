import React from 'react';

const LeaveGroup = (props) => {
  return (
    <form
    onSubmit={props.addLeaveGroup}
    >
      <h6> Are you sure you want to leave this group?</h6>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input 
            type="password" 
            class="form-control" 
            id="inputPassword3"
            name="leaveGroupPassword"
            value={props.leaveGroupPassword} 
            onChange={props.handleLeaveGroupInputChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn btn-primary">Leave Group</button>
        </div>
      </div>
    </form>
  )
}
export default LeaveGroup;