import React from 'react';
import { Link } from 'react-router-dom';
import PageIntro from './PageIntro'
import Cards from '../../components/Cards/Cards'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <PageIntro />
        <Cards 
          title="Your Current Tasks"
        />
        <Cards 
          title="Your Groups"
        />
      </div>
        );
      };
    };
    
export default Dashboard;