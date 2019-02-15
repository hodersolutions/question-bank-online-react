import React, { Component } from 'react';
import Notifications from './Notifications';
import QuestionList from '../question/QuestionList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <QuestionList />
            </div>
            <div className="col s12 m5 offset-m1">
                <Notifications/>
            </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;