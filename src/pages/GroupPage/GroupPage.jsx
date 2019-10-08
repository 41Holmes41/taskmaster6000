import React from 'react';
import PageIntro from "./PageIntro"
import TaskCards from './TaskCards/TaskCards'
import MessageBoard from './MessageBoard'
import VerticalUserDisplay from './Leaderboard';
import groupService from '../../utils/groupService'


class GroupPage extends React.Component {
  constructor() {
    super();
    this.state= {
      group: {},
      availableTasks: [],
      user: {}
    }
  }
 

 async componentDidMount() {
    let groupInfo = await groupService.getInfo(this.props.match.params.id)
    this.setState({group: groupInfo.group, availableTasks: groupInfo.group.availableTasks, user: this.props.user})
  }


    render() { 
      return (
        <div className="container">
        <PageIntro
          groups = {this.state.group}
        />
        <MessageBoard/>
        <TaskCards 
          title="Your Current Tasks"
        />
        <TaskCards 
          title="Available Tasks"
          availableTasks={this.state.availableTasks}
          userId={this.state.user._id}
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