import React from 'react';
import { Link } from 'react-router-dom';
import CreateTask from '../../components/CreateTask/CreateTask'
import LeaveGroup from './LeaveGroup';
import EditGroup from './EditGroup';
import ViewMembers from './ViewMembers';


const PageIntro = (props) => {
    return (
      <div>
        <div class="jumbotron border border shadow p-3 mb-5">
          <h1 class="display-4">Welcome to {props.title}!</h1>
          <p class="lead">Here you can see all the tasks in this group.<br/> Try creating new task or taking an available one!</p>
          <hr class="my-4" />
          <h3>Group Tools</h3>
          <p>
          <div class="btn-group" role="group" aria-label="Basic example">
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#createtask" aria-expanded="false" aria-controls="createtask">Create Task</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#viewmembers" aria-expanded="false" aria-controls="viewmembers">Members</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#editgroup" aria-expanded="false" aria-controls="editgroup">Edit Group</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#leavegroup" aria-expanded="false" aria-controls="leavegroup">Leave Group</button>
          </div>
          </p>
          <div class="collapse" id="createtask">
            <div class="card card-body">
              <CreateTask 
                handleInputChange={props.handleInputChange} 
                newTaskDescription={props.newTaskDescription} 
                newTaskName={props.newTaskName}
              />
            </div>
          </div>
          <div class="collapse" id="viewmembers">
            <div class="card card-body">
              <ViewMembers />
            </div>
          </div>
          <div class="collapse" id="editgroup">
            <div class="card card-body">
              <EditGroup 
                handleEditGroupInputChange={props.handleEditGroupInputChange}
                addEditGroup={props.addEditGroup} 
                editGroupName={props.editGroupName}
                editGroupPassword={props.editGroupPassword}
                editGroupDescription={props.editGroupDescription}
              />
            </div>
          </div>
          <div class="collapse" id="leavegroup">
            <div class="card card-body">
              <LeaveGroup 
                handleLeaveGroupInputChange={props.handleLeaveGroupInputChange}
                leaveGroupPassword={props.leaveGroupPassword}
                addLeaveGroup={props.addLeaveGroup}
              />
            </div>
          </div>
        </div>
      </div>
        );
    };
    
export default PageIntro;