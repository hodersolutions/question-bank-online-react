import React, { Component } from 'react';

class Loading extends Component {
    render() {
        const style = {
            'margin': '0px 40px 150px 40px'            
        }
        return (
            <div className="d-flex justify-content-center" style={ style }>
                <img src={require("../../static/images/loading.gif")} alt="Loading" height='300' width='300' />							
            </div>
        );
    }
}

export default Loading;