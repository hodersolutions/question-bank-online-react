import React, { Component } from 'react';
// import ModuleList from '../module/show/ModuleList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './UserDashboard.css';

class UserDashboard extends Component {
  render() {
    const style = {
      'margin': '0px 0px 25px 15px' 
    }
    return (
      <div className="container">
          <div className="row">
            <div className="col col-centered wrapper">
                <h3 className="border-bottom mb-5 h3 mb-5 font-header">Recent Modules / Topics</h3>
                {/* <ModuleList modules={this.props.modules}  /> */}
                <Link to="/module" className="nav-item nav-link">                    
                    <span>Add Module</span>
                </Link>
            </div>
          </div>
          <div className="row">
            <div className="col col-centered wrapper">
                <h3 className="border-bottom mb-5 h3 mb-5 font-header">Recent Exams</h3>
                <p style={ style }>No Exams added recently...</p>
            </div>            
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		modules: state.module.modules
	}
}

export default connect(mapStateToProps)(UserDashboard);