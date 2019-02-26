import React, { Component } from 'react';
import './OptionCard.css';

class OptionCard extends Component {    
    handleCheckChange = (e) => {
        this.props.onContentChange({
            id: this.props.id,
            option: this.props.option,
            is_correct_option: e.target.checked
        });
    }
    render() {
        const option_style = {
            'padding': '0px 15px 15px 0px',
            'verticalAlign': 'middle',
            'fontWeight': '600'
        }
        const answer_style = {
            'padding': '0px 15px 15px 10px',
            'verticalAlign': 'middle',
            'fontWeight': '600'
        }
        return (
            <table className="container-fluid">
                <tbody>
                    <tr>
                        <td style={ option_style }>
                            Option { this.props.id }
                        </td>
                        <td style={ answer_style }>
                            Answer
                        </td>
                    </tr>
                    <tr>
                        <td className="option-td option-text" align="center" valign="middle">
                            <div className="option-container"></div>
                        </td>
                        <td className="option-td" align="center" valign="top">
                            <label className="switch">
                                <input type="checkbox" id="option" name="option" className="success" checked={ this.props.is_correct_option } onChange={ this.handleCheckChange }/>
                                <span className="slider"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
  }
}

OptionCard.defaultProps = {
    id: 0,
    option: '',
    is_correct_option: false
} 

OptionCard.propTypes = {
    id: PropTypes.number.isRequired,
    option: PropTypes.string,
    is_correct_option: PropTypes.bool
} 

export default OptionCard;