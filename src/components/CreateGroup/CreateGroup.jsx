import React from 'react';

const CreateGroup =(props) => {
      return (
        <form>
        <div class="form-group row">
          <label for="groupname" class="col-sm-2 col-form-label">Group Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="groupname" placeholder="Enter Name of Group"/>
      </div>
          </div>
          <div class="form-group row">
          <label for="description" class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="description" placeholder="Enter Description of Group"/>
      </div>
            </div>
                  <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
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
      );
  };

export default CreateGroup;