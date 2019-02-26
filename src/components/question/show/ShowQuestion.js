import React, { Component } from 'react';
import axios from 'axios';
import API from '../../common/APIHelper';

class ShowQuestion extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            id: 4,
            question: undefined    
        }
    }
    
	componentWillUnmount() {
		this._isMounted = false;
    }
    
    componentDidMount() {
        this._isMounted = true;
        axios.get(API.URI + 'api/v1/questions?id=' + this.state.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'    
        }).then( response => {								
            if (this._isMounted) {
                console.log(response.data['question']);
                this.setState({
                    question: response.data['question']
                });
            }
        });
    }
    render() {
        return (
            <div className="container-fluid section question-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">
                            Question title { this.state.id }
                        </div>
                        <p>Question option 1</p>
                        <p>Question option 2</p>
                        <p>Question option 3</p>
                        <p>Question option 4</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <p>Posted by me</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default ShowQuestion
