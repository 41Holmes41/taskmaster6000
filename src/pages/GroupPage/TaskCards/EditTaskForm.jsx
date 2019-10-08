import React from 'react';
import taskService from '../../../utils/taskService'

class EditTaskForm extends React.Component {
  constructor(){
    super();
    this.state={
      name: "",
      description: "",
      taskId: ""
    }
  }

  componentDidMount(){
   
      this.setState({taskId: this.props.taskId})
   
  }

  componentDidUpdate(){
    if(this.state.taskId!=this.props.taskId){
      this.setState({taskId: this.props.taskId})
    }
  }

  editTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await taskService.edit(this.state)
      this.setState({
          name: "",
          description: "",
      })
    } catch (err) {
      console.log("create task error at createtask.jsx edittasksubmit", err)
    }
  }

  handleEditTaskInputChange = e => {
    this.setState({[e.target.name]: e.target.value});  
  }

  render() {

    return (
      <form onSubmit={this.editTaskSubmit} >
        <div class="form-group">
          <label for="exampleInputEmail1">Edit Name</label>
          <input onChange={this.handleEditTaskInputChange} name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.name} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Edit Description</label>
          <input onChange={this.handleEditTaskInputChange} name="description" type="text" class="form-control" id="exampleInputPassword1"  value={this.state.description} />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    )

  }
}

export default EditTaskForm;