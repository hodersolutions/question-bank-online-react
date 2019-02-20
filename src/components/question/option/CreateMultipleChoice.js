import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TinyMCE} from '../../ui-helpers/TinyMCE';
import './CreateMultipleChoice.css';

class CreateMultipleChoice extends Component {
    handleRichEditorContent = (content) => {
        this.props.onContentChange({
            id: this.props.id,
            option: content,
            is_correct: this.props.is_correct
        });
    }
    handleCheckChange = (e) => {
        this.props.onContentChange({
            id: this.props.id,
            option: this.props.option,
            is_correct: e.target.checked
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
                            <TinyMCE content={ this.props.option } onContentChange={ this.handleRichEditorContent }/>    
                        </td>
                        <td className="option-td" align="center" valign="top">
                            <label className="switch">
                                <input type="checkbox" id="option" name="option" className="success" checked={ this.props.is_correct } onChange={ this.handleCheckChange }/>
                                <span className="slider"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
  }
}

CreateMultipleChoice.defaultProps = {
    id: 0,
    option: '',
    is_correct: false
} 

CreateMultipleChoice.propTypes = {
    id: PropTypes.number.isRequired,
    option: PropTypes.string,
    is_correct: PropTypes.bool
} 

export default CreateMultipleChoice;