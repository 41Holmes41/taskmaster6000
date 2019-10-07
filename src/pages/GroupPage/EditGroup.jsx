import React from 'react';

const EditGroup = (props) => {
  return (
    <form
      onSubmit={props.addEditGroup}
    >

      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Select Group</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
              <label class="form-check-label" for="gridRadios1">
                First radio
          </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
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
          <input 
            onChange={props.handleEditGroupInputChange}
            type="text" 
            class="form-control" 
            id="groupname"
            name="editGroupName"
            value={props.editGroupName} 
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">New Description</label>
        <div class="col-sm-10">
          <input 
            onChange={props.handleEditGroupInputChange}
            type="text" 
            class="form-control" 
            id="description"
            name="editGroupDescription"
            value={props.editGroupDescription} 
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">New Password</label>
        <div class="col-sm-10">
          <input 
            onChange={props.handleEditGroupInputChange}
            type="password" 
            class="form-control" 
            id="inputPassword3"
            name="editGroupPassword"
            value={props.editGroupPassword} 
          />
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn btn-primary">Submit Group</button>
        </div>
      </div>
    </form>
  )
}
export default EditGroup;