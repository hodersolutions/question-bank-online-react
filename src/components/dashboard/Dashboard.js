import React, { Component } from 'react';
import ModuleList from '../module/show/ModuleList';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m12">
                <ModuleList count='5' creator_id='' />
            </div>            
        </div>
      </div>
    )
  }
}

export default Dashboard;