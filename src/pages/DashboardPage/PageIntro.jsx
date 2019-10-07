import React from 'react';
import CreateTask from '../../components/CreateTask/CreateTask'
import CreateGroup from '../../components/CreateGroup/CreateGroup'
import JoinGroup from '../../components/JoinGroup/JoinGroup'

const PageIntro = (props) => {
    return (
      <div>
        
        <div className="jumbotron border border shadow p-3 mb-5">
          <h1 className="display-4">Welcome to your Dashboard!</h1>
          <p className="lead">Here you can find all of your basic task and group information.<br /> Use the Dashboard Tools to create tasks or groups!</p>
          <hr className="my-4" />
          <h3>Dashboard Tools</h3>
          <p>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#createtask" aria-expanded="false" aria-controls="createtask">Create Task</button>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#creategroup" aria-expanded="false" aria-controls="creategroup">Create Group</button>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#joingroup" aria-expanded="false" aria-controls="joingroup">Join Group</button>
          </div>
          </p>
          <div className="collapse" id="createtask">
            <div className="card card-body">
              <CreateTask 
                newTaskDescription={props.newTaskDescription} 
                handleNewTaskInputChange={props.handleNewTaskInputChange}
                newTaskName={props.newTaskName}
                addTask={props.addTask}
                />
            </div>
          </div>
          <div className="collapse" id="creategroup">
            <div className="card card-body">
              <CreateGroup 
                handleCreateGroupInputChange={props.handleCreateGroupInputChange}
                addGroup={props.addGroup} 
                newGroupDescription={props.newGroupDescription} 
                newGroupName={props.newGroupName}
                newGroupPassword={props.newGroupPassword}
              />
            </div>
          </div>
          <div className="collapse" id="joingroup">
            <div className="card card-body">
              <JoinGroup 
                handleJoinGroupInputChange={props.handleJoinGroupInputChange}
                addJoinGroup={props.addJoinGroup} 
                joinGroupName={props.joinGroupName}
                joinGroupPassword={props.joinGroupPassword}
              />
            </div>
          </div>
        </div>
      </div>
        );
    };
    
export default PageIntro;