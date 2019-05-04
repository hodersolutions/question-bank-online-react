import React, { Component } from 'react';
import './CreateExam.css';
import Notifications, { notify } from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import Loading from '../../common/loading/Loading';
import { connect } from 'react-redux';
import { createExam } from '../../../store/actions/examActions';
import { CREATE_EXAM_SUCCESS, CREATE_EXAM_ERROR } from '../../../store/types/examTypes';

class CreateExam extends Component {
    state = {
        exam: '',
        exam_duration: 0,
        description: '',
        creator_id: '',
        is_active: true
    }
    
    componentDidMount() {
        this.setState({
            creator_id: this.props.user.current_user.id
        });        
    }
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createExam(this.state);	
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
        }
        if (this.props.exam.status === CREATE_EXAM_SUCCESS) {
            return (
                <Redirect to='/home' />
            )
        }
        else if(this.props.exam.status === CREATE_EXAM_ERROR) {
            if(this.props.exam.error !== null)
                if(this.props.exam.error.response !== undefined && this.props.exam.error.response.status === 401)
                    notify.show(this.props.user.error.response.data['message'], 'error', 3000, 'red');
            else
                notify.show("Unable to create exam...", 'error', 3000, 'red');            
            this.props.exam.error = null;
        }        
        return ( 
            <div>
                <Notifications options={{ options }}/>
                { this.props.exam.loading ? <Loading /> :
                    <div className="container add-exam">
                        <form action="/exam" onSubmit={this.handleSubmit} method="POST">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <h3 className="header">Add Exam</h3>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <input className="btn btn-md btn-success" id="submit" name="submit" type="submit" value="Upload"/>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <input className="btn btn-md btn-secondary" id="clear" name="clear" type="button" value="Clear"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="exam"><b><u>Exam name</u></b></label>
                                        <input className="form-control form-control-sm" id="exam" name="exam" required="" type="text" autoComplete="exam-name" value={this.state.exam} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="parent"><b><u>Parent exam / topic</u></b></label>
                                        <input className="form-control form-control-sm" id="parent_exam_id" name="parent_exam_id" required="" type="text" autoComplete="parent-exam-id" value={this.state.parent_exam_id} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="description"><b><u>Description</u></b></label>
                                        <textarea className="form-control form-control-sm description" id="description" name="description" required="" autoComplete="description" value={this.state.description} onChange={this.handleChange}/>
                                    </div>                            
                                </div>
                            </div>
                        </form>                        
                    </div>
                }
            </div>
        );        
    }    
}

const mapStateToProps = (state) => {
	return {
    	exam: state.exam,
        user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExam: (exam) => dispatch(createExam(exam))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExam);