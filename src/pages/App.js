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
      user: userService.getUser()
    }
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

 render() {
   return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>

          <Route exact path="/" render={()=><HomePage />}/>

          <Route exact path='/dashboard'  render={() =><DashboardPage/>}/>

          <Route exact path='/group/:id' render={(props) =><GroupPage {...props}/>}/>

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