import React, { Component } from 'react';
import './OptionCard.css';
import renderHTML from 'react-render-html';

class OptionCard extends Component {   
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
                                { renderHTML(this.props.option) }
                                <span className="slider"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
  }
}

export default OptionCard;