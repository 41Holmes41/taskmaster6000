import React from 'react';
import { Link } from 'react-router-dom';
import CreateTask from '../../components/CreateTask/CreateTask'
import CreateGroup from '../../components/CreateGroup/CreateGroup'
import JoinGroup from '../../components/JoinGroup/JoinGroup'

class PageIntro extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron border border shadow p-3 mb-5">
          <h1 class="display-4">Welcome to your Dashboard!</h1>
          <p class="lead">Here you can find all of your basic task and group information.<br /> Use the Dashboard Tools to create tasks or groups!</p>
          <hr class="my-4" />
          <h3>Dashboard Tools</h3>
          <p>
          <div class="btn-group" role="group" aria-label="Basic example">
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#createtask" aria-expanded="false" aria-controls="createtask">Create Task</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#creategroup" aria-expanded="false" aria-controls="creategroup">Create Group</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#joingroup" aria-expanded="false" aria-controls="joingroup">Join Group</button>
          </div>
          </p>
          <div class="collapse" id="createtask">
            <div class="card card-body">
              <CreateTask />
            </div>
          </div>
          <div class="collapse" id="creategroup">
            <div class="card card-body">
              <CreateGroup />
            </div>
          </div>
          <div class="collapse" id="joingroup">
            <div class="card card-body">
              <JoinGroup />
            </div>
          </div>
        </div>
      </div>
        );
      };
    };
    
export default PageIntro;