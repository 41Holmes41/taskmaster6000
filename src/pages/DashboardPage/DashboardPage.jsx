import React from 'react';
import { Link } from 'react-router-dom';
import PageIntro from './PageIntro'
import Cards from '../../components/Cards/Cards'

const Dashboard = (props) => {
  
    return (
      <div className="container">
        <PageIntro newTask={props} />
        <Cards 
          title="Your Current Tasks"
        />
        <Cards 
          title="Your Groups"
        />
      </div>
        );
    };
    
export default Dashboard;