import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import './ShowModule.css';
import Notifications, { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import { getModule } from '../../../store/actions/moduleActions';
import { GET_MODULE_ERROR } from '../../../store/types/moduleTypes';

export class ShowModule extends Component {  
    componentDidMount() {        
        this.props.getModule(1);
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
        }
        if (this.props.module.status === GET_MODULE_ERROR) {
            if(this.props.module.error !== null)
                if(this.props.module.error.response !== undefined && this.props.module.error.response.status === 401)
                    notify.show(this.props.user.error.response.data['message'], 'error', 3000, 'red');
            else
                notify.show("Unable to retrieve module...", 'error', 3000, 'red');            
            this.props.module.error = null;
        }
        return (
            <div>
                <Notifications options={{ options }}/>
                <div className="container show-module">                      
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form-group">
                                <div><b><u>Module</u></b></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <div className="container module-card-border">
                                    <div className="row">
                                        <div className="col-*" valign="middle">
                                            { renderHTML(this.props.module.modules[0].module) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form-group">
                                <div><b><u>Parent module</u></b></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <div className="container module-card-border">
                                    <div className="row">
                                        <div className="col-*" valign="middle">
                                            { renderHTML(this.props.module.modules[0].parent_module_id) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="form-group">
                                <div><b><u>Description</u></b></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <div className="container module-card-border">
                                    <div className="row">
                                        <div className="col-*" valign="middle">
                                            { renderHTML(this.props.module.modules[0].description) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                        
        )
    };
}

const mapStateToProps = (state) => {
	return {
    	module: state.module,
        user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getModule: (id) => dispatch(getModule(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowModule);
