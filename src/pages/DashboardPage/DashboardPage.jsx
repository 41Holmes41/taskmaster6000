import React from 'react';
import PageIntro from './PageIntro'
import Cards from '../../components/Cards/Cards'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state= {
      newTasks: [{newTaskName:"", newTaskDescription:""}],
      newTask: {
        newTaskName: "",
        newTaskDescription: "",
        newTaskGroups: [],  
      },
      newGroups: [{newGroupName:"", newGroupDescription: "", newGroupPassword:""}],
      newGroup: {
        newGroupName: "",
        newGroupDescription: "",
        newGroupPassword: ""
      },
      joinGroups: [{joinGroupName:"", joinGroupPassword:""}],
      joinGroup: {
        joinGroupName: "",
        joinGroupPassword: ""
      },
      editGroups: [{editGroupName:"", editGroupPassword:"", editGroupDescription:""}],
      editGroup: {
        editGroupName: "",
        editGroupPassword: "",
        editGroupDescription:"",
        editSelectGroup:"",
      },
    }
  }

  handleNewTaskInputChange = e => {
    const newTask = {...this.state.newTask, [e.target.name]: e.target.value}
    this.setState({newTask});  
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState(state => ({
      newTasks: [...state.newTasks, state.newTask],
      newTask: {
        newTaskName: "",
        newTaskDescription: "",
        newTaskGroups: []
      }
    }))
  }

  handleCreateGroupInputChange = e => {
    const newGroup = {...this.state.newGroup, [e.target.name]: e.target.value}
    this.setState({newGroup});
  }

  addGroup = (e) => {
    e.preventDefault();
    this.setState(state => ({
      newGroups: [...state.newGroups, state.newGroup],
      newGroup: {
        newGroupName: "",
        newGroupDescription: "",
        newGroupPassword: ""
      }
    }))
  }

  handleJoinGroupInputChange = e => {
    const joinGroup = {...this.state.joinGroup, [e.target.name]: e.target.value}
    this.setState({joinGroup});
  }

  addJoinGroup = (e) => {
    e.preventDefault();
    this.setState(state => ({
      joinGroups: [...state.joinGroups, state.joinGroup],
      joinGroup: {
        joinGroupName: "",
        joinGroupPassword: ""
      }
    }))
  }
  
  handleEditGroupInputChange = e => {
    const editGroup = {...this.state.editGroup, [e.target.name]: e.target.value}
    this.setState({editGroup});
  }

  addEditGroup = (e) => {
    e.preventDefault();
    this.setState(state => ({
      editGroups: [...state.editGroups, state.editGroup],
      editGroup: {
        editGroupName: "",
        editGroupPassword: "",
        editGroupDescription:"",
        editSelectGroup:"",
      }
    }))
  }

  render() {
    return (
      <div className="container">
        
        <PageIntro 
          newTaskDescription={this.state.newTask.newTaskDescription} 
          newTaskName={this.state.newTask.newTaskName}
          handleNewTaskInputChange={this.handleNewTaskInputChange}
          addTask={this.addTask}
          handleCreateGroupInputChange={this.handleCreateGroupInputChange}
          addGroup={this.addGroup} 
          newGroupDescription={this.state.newGroup.newGroupDescription} 
          newGroupName={this.state.newGroup.newGroupName}
          newGroupPassword={this.state.newGroup.newGroupPassword}
          handleJoinGroupInputChange={this.handleJoinGroupInputChange}
          addJoinGroup={this.addJoinGroup} 
          joinGroupName={this.state.joinGroup.joinGroupName}
          joinGroupPassword={this.state.joinGroup.joinGroupPassword}
          />
        <Cards 
          title="Your Current Tasks"
        />
        <Cards 
          title="Your Groups"
        />
      </div>
        );
    }
    };
    
export default Dashboard;