import React, { Component } from 'react';
import axios from 'axios';
import API from '../../common/APIHelper';
import './CreateModule.css';
import Notifications, {notify} from 'react-notify-toast';

class CreateModule extends Component {
    state = {
        module: '',
        parent_module_id: '',
        description: '',
        creator_id: 1,//TODO: This needs to be change to the user id, logged in
        is_active: true
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		});
    }
    
    handleSubmit = (e) => {
		e.preventDefault();
		axios.post(API.URI + 'api/v1/modules', {
				headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('auth_token'),
                    'username': localStorage.getItem('username')
				},
				mode: 'cors',
				module: this.state.module,
                parent_module_id: (this.state.parent_module_id === '')? null : this.state.parent_module_id,
                is_active: true,
                description: this.state.description,
                creator_id: this.state.creator_id
			}
		).then( function(response) {
                if(response.data['status'] === 'success') {                    
                    notify.show(response.data['message'], 'success', 3000, 'green');
                }					
                else {
                    notify.show(response.data['message'], 'error', 3000, 'red');
                }
            }
        ).catch(error => {			
            if (error.response.status === 400 || error.response.status === 500) {
                let color = { background: '#0E1717', text: "#FFFFFF" };
                notify.show(error.response.data['message'], 'error', 3000, color);				
            }
        });
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
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

export default CreateModule;