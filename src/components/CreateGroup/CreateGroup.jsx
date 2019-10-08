import React from 'react';
import groupService from '../../utils/groupService';

class CreateGroup extends React.Component {

  constructor() {
    super();
    this.state= {
      newGroup: {
        name: "",
        description: "",
        password: ""
      },
    }
  }

  handleCreateGroupInputChange = e => {
    const newGroup = {...this.state.newGroup, [e.target.name]: e.target.value}
    this.setState({newGroup});
  }

  addGroupSubmit = async (e) => {
    e.preventDefault();
    try {
      await groupService.create(this.state.newGroup)
      this.setState({
        newGroup: {
          name: "",
          description: "",
          password: ""
        }
      })
    } catch (err) {
      console.log("create group error at creategroup.jsx addgroupsubmit", err)
    }
  }

  render() {
      return (
        <form
          onSubmit={this.addGroupSubmit}
        >

          <div className="form-group row">
            <label for="groupname" className="col-sm-2 col-form-label">Group Name</label>
            <div className="col-sm-10">
              <input 
                onChange={this.handleCreateGroupInputChange}
                type="text" 
                className="form-control" 
                id="groupname" 
                name="name"
                value={this.state.newGroup.name} 
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input 
                onChange={this.handleCreateGroupInputChange}
                type="text" 
                className="form-control" 
                id="description" 
                name="description"
                value={this.state.newGroup.description} 
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input 
                onChange={this.handleCreateGroupInputChange}
                type="password" 
                className="form-control" 
                id="inputPassword3" 
                name="password"
                value={this.state.newGroup.password} 
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
}
  };

export default CreateGroup;