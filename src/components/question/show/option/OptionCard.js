import React, { Component } from 'react';
import './OptionCard.css';
import renderHTML from 'react-render-html';

class OptionCard extends Component {
    render() {
        return (
            <div className="container-fluid option-card-border">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-1 col-xl-1" valign="middle">
                        <label className="switch">                                
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="col-sm-11 col-md-10 col-lg-11 col-xl-11">
                        <div className="option-container">
                            { renderHTML(this.props.option) }
                        </div>
                    </div>
                </div>                    
            </div>
    )
  }
}

export default OptionCard;