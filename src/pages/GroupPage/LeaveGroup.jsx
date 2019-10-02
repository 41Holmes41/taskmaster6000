import React from 'react';

const LeaveGroup = (props) => {
  return (
    <form>
    <h6> Are you sure you want to leave this group?</h6>
                  <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Leave Group</button>
                      </div>
                    </div>
  </form>
  )
}
export default LeaveGroup;