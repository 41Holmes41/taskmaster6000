import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import DashboardPage from './DashboardPage/DashboardPage';
import HomePage from './HomePage/HomePage';
import GroupPage from './GroupPage/GroupPage';
import InboxPage from './InboxPage/InboxPage';
import UserInfoPage from './UserInfoPage/UserInfoPage';
import SignupPage from './SignupPage/SignupPage';
import LoginPage from './LoginPage/LoginPage';

import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

import userService from '../utils/userService';

class App extends React.Component  {
  constructor() {
    super();
    this.state= {
      user: userService.getUser(),
      groups:[],
      currentTasks: []
    }
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  async componentDidMount() {
    if (this.state.user){
    let userInfo = await userService.getInfo(this.state.user._id)
    this.setState({
      groups: userInfo.user.groups,
      currentTasks: userInfo.user.currentTasks
    })
  }
  }

 render() {
   return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>

          <Route exact path="/" render={()=><HomePage />}/>

          <Route exact path='/dashboard'  render={() =>
            <DashboardPage
              user={this.state.user}
              groups={this.state.groups}
              currentTasks={this.state.currentTasks}
            />}/>

          <Route exact path='/group/:id' render={(props) =>
            <GroupPage {...props}
              user={this.state.user}
          />}/>

          <Route exact path='/inbox' render={() =><InboxPage />}/>
       
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path='/userinfo/:id' render={() =><UserInfoPage />}/>

        </Switch>
        <Footer />
      </div>
    );
  }
};

export default App;