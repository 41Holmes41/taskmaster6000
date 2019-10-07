import React from 'react';
import PageIntro from "./PageIntro"
import Cards from '../../components/Cards/Cards'
import MessageBoard from './MessageBoard'
import VerticalUserDisplay from './Leaderboard';


class GroupPage extends React.Component {

  constructor() {
    super();
    this.state= {
      newTasks: [{newTaskName:"", newTaskDescription:""}],
      newTask: {
        newTaskName: "",
        newTaskDescription: "",
        newTaskGroups: [],  
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
      leaveGroups: [{leaveGroupPassword:""}],
      leaveGroup: {
        leaveGroupPassword: ""
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

  handleLeaveGroupInputChange = e => {
    const leaveGroup = {...this.state.leaveGroup, [e.target.name]: e.target.value}
    this.setState({leaveGroup});
    console.log(this.state.leaveGroups)
  }

  addLeaveGroup = (e) => {
    e.preventDefault();
    this.setState(state => ({
      leaveGroups: [...state.leaveGroups, state.leaveGroup],
      leaveGroup: {
        leaveGroupPassword: "",
      }
    }))
  }

  render() {
      return (
        <div className="container">
        <PageIntro
          title = "GROUPNAME"
          handleInputChange={this.handleInputChange} 
          newTaskDescription={this.state.newTaskDescription} 
          newTaskName={this.state.newTaskName}
          handleEditGroupInputChange={this.handleEditGroupInputChange}
          addEditGroup={this.addEditGroup} 
          editGroupName={this.state.editGroup.editGroupName}
          editGroupPassword={this.state.editGroup.editGroupPassword}
          editGroupDescription={this.state.editGroup.editGroupDescription}
          handleLeaveGroupInputChange={this.handleLeaveGroupInputChange}
          leaveGroupPassword={this.state.leaveGroup.leaveGroupPassword}
          addLeaveGroup={this.addLeaveGroup}
        />
        <MessageBoard/>
        <Cards 
          title="Your Current Tasks"
        />
        <Cards 
          title="Available Tasks"
        />
        <div className="container row">
          <div className="list-group col-6">
         <VerticalUserDisplay title="Leaderboard"/>
        </div>
          <div className="list-group col-6">
         <VerticalUserDisplay title="Recently Completed"/>
        </div>
        </div>
      </div>
      );
  }
};

export default GroupPage;