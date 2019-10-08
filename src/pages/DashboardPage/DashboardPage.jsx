import React from 'react';
import PageIntro from './PageIntro'
import GroupCards from './GroupCards/GroupCards'
import TaskCards from './TaskCards/TaskCards'
import userService from '../../utils/userService';

const Dashboard = (props) => {
    return (
      <div className="container">
        
        <PageIntro 
          />
        <TaskCards 
          tasks= {props.currentTasks}
        /> 
        <GroupCards 
          groups={props.groups}
        />
      </div>
        );
    };
    
export default Dashboard;