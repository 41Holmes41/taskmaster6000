import React from 'react';
import PageIntro from "./PageIntro"
import Cards from '../../components/Cards/Cards'
import MessageBoard from './MessageBoard'
import VerticalUserDisplay from './Leaderboard';


class GroupPage extends React.Component {
  render() {
      return (
        <div className="container">
        <PageIntro
          title = "GROUPNAME"
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
  };
};

export default GroupPage;