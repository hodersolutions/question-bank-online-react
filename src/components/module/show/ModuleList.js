import React, { Component } from 'react';
import axios from 'axios';
import API from '../../common/APIHelper';
import ModuleCard from './ModuleCard';

class ModuleList extends Component {
	_isMounted = false;
	state = {
		modules: [],
		count: this.props.count,
		creator_id: this.props.creator_id	
	}

	componentWillUnmount() {
		this._isMounted = false;
	}
	
	componentDidMount() {
		this._isMounted = true;
		var full_uri = API.URI + 'api/v1/modules'; 
		if (this.state.creator_id === '')
			full_uri = full_uri + '/latest/' + this.state.count
		else
			full_uri = full_uri + '/creator/' + this.state.creator_id +'/latest/' + this.state.count

		axios.get(full_uri, {
				headers: {
						'Content-Type': 'application/json'
				},
				mode: 'cors'    
		}).then( response => {								
				if (this._isMounted) {
					console.log(response.data);
					var module_list = Object.keys(response.data['modules']).map(function (i) {
						return response.data['modules'][i];
					});
					this.setState({
						modules: module_list
					});
				}
		});
	}

  render() {
    return (
    	<div className="module-list section">
      	{
			this.state.modules.map((moduleObj, index) => {
				return (<ModuleCard key={ index } module={ moduleObj.module } description={ moduleObj.description } author={ moduleObj.creator_id } />);
			})
		}
      	</div>
    )
  }
}

export default ModuleList;