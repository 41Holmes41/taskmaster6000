import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import DashboardPage from './DashboardPage/DashboardPage';
import NavBar from '../components/Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import GroupPage from './GroupPage/GroupPage';
import InboxPage from './InboxPage/InboxPage';
import UserInfoPage from './UserInfoPage/UserInfoPage';
import Footer from '../components/Footer/Footer'




class App extends React.Component  {
  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={()=><HomePage />}/>
          <Route exact path='/dashboard' render={() =><DashboardPage />}/>
          <Route exact path='/group/:id' render={(props) =><GroupPage {...props} />}/>
          <Route exact path='/inbox' render={() =><InboxPage />}/>
          <Route exact path='/userinfo/:id' render={() =><UserInfoPage />}/>
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default App;