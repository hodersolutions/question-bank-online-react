import React, { Component } from 'react';
import './AddOption.css';

class AddOption extends Component {
    constructor(props) {
		super(props);
		this.state = {
            id: '',
			option_text: '',
			is_correct: ''
		}
		this.handleChange = this.handleChange.bind(this);		
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
    render() {
        return (
            <table>
                <tr>
                    <td className="option-td option-text" align="center" valign="middle">
                        <div className="form-group shadow-textarea">
                            <textarea className="form-control option" id="optionText" name="optionText" placeholder="Option"></textarea>
                        </div>
                    </td>
                    <td className="option-td" align="center" valign="middle">
                        <label className="switch ">
                            <input type="checkbox" id="option" name="option" className="success"/>
                            <span className="slider"></span>
                        </label>
                    </td>
                </tr>
            </table>
        );
    }
}

export default AddOption;