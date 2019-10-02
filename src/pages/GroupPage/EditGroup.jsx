import React from 'react';

const EditGroup = (props) => {
  return (
    <form>
    <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Select Group</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
          <label for="groupname" class="col-sm-2 col-form-label">New Group Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="groupname" placeholder="Enter Name of Group"/>
      </div>
          </div>
          <div class="form-group row">
          <label for="description" class="col-sm-2 col-form-label">New Description</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="description" placeholder="Enter Description of Group"/>
      </div>
            </div>
                  <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">New Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit Group</button>
                      </div>
                    </div>
  </form>
  )
}
export default EditGroup;