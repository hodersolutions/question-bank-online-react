import React, { Component } from 'react';
import './CreateModule.css';
import Notifications, { notify } from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createModule } from '../../../store/actions/moduleActions';

class CreateModule extends Component {
    constructor() {
        super();
        this.state = {
            module: '',
            parent_module_id: '',
            description: '',
            creator_id: 1,
            is_active: true
        }
    }
        
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createModule(this.state);	
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
        }
        if (this.props.module.is_created) {
            this.props.module.is_created = false;
            return (
                <Redirect to='/user/home' />
            )
        }
        return (
            <div className="container add-module">
                <Notifications options={{ options }}/>
                <form action="/module" onSubmit={this.handleSubmit} method="POST">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <h3 className="header">Add Module / Topic</h3>
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
                                <label className="form-control-label" htmlFor="module"><b><u>Module name</u></b></label>
                                <input className="form-control form-control-sm" id="module" name="module" required="" type="text" autoComplete="module-name" value={this.state.module} onChange={this.handleChange}/>
                            </div>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="parent"><b><u>Parent module / topic</u></b></label>
                                <input className="form-control form-control-sm" id="parent_module_id" name="parent_module_id" required="" type="text" autoComplete="parent-module-id" value={this.state.parent_module_id} onChange={this.handleChange}/>
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
        );
    }    
}

const mapStateToProps = (state) => {
	return {
    	module: state.module,
        auth: state.auth,
        user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createModule: (module) => dispatch(createModule(module))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateModule);