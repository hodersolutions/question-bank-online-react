import React, { Component } from 'react';
import {TinyMCE} from '../ui-helpers/TinyMCE';
import CreateMultipleChoice from './option/CreateMultipleChoice';
import QuestionType from '../common/Enums';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import API from '../common/APIHelper';
import './CreateQuestion.css';

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    };

    state = {
        question_type: QuestionType.multiple,
        question: '',
        options: [
            {
                id: 1,
                option: '', 
                is_correct_option: false
            },
            {
                id: 2,
                option: '', 
                is_correct_option: false
            }
        ]
    };    

    handleTabChange = (key) => {
        this.setState({ question_type: key });
    }
    
    handleRichEditorContent = (content) => {
        console.log(content);
        this.setState(
            {
                question: content
            });
    };

    handleOptionContent = (content) => {
        const index = this.state.options.findIndex((optionObj) => {
            return (optionObj.id === content.id);
        });
        const option = Object.assign({}, this.state.options[index]);
        option.option = content.option;
        option.is_correct_option = content.is_correct_option;

        const tamperable_options = Object.assign([], this.state.options);
        tamperable_options[index] = option;
        this.setState({
            options: tamperable_options
        })
    };

    handleMinus = () => {
        if (this.state.options.length > 2) {
            const tamperable_options = Object.assign([], this.state.options);
            tamperable_options.splice(tamperable_options.length - 1, 1);
            this.setState({
                options: tamperable_options
            });
        }
    };

    handlePlus = () => {
        if (this.state.options.length < 8) {
            const tamperable_options = Object.assign([], this.state.options);
            tamperable_options.push({
                id: this.state.options.length + 1,
                option: '', 
                is_correct_option: false
            });
            this.setState({
                options: tamperable_options
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();        
		axios.post(API.URI + 'api/v1/questions', {
				headers: {
                    'Content-Type': 'application/form-data',
                    'token': localStorage.getItem('auth_token'),
                    'username': localStorage.getItem('username')
				},
				mode: 'cors',
				params: this.state
			}
		).then( function(response) {
				console.log(response);
			}
		)
    };
    
    render() {
        return (
            <div className="container-fluid add-question">
                <form action="/question" onSubmit={this.handleSubmit} method="POST">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <h3 className="header">Add Question</h3>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-2">
                            <div className="form-group">
                                <input className="btn btn-md btn-primary" id="validate" name="validate" type="button" value="Validate"/>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-2">
                            <div className="form-group">
                                <input className="btn btn-md btn-success" id="submit" name="submit" type="submit" value="Upload"/>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-2">
                            <div className="form-group">
                                <input className="btn btn-md btn-secondary" id="clear" name="clear" type="button" value="Clear"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <TinyMCE key={ this.state.id } content={ this.state.question } onContentChange={ this.handleRichEditorContent }/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <h4 className="header">Select answer type</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md">
                                        <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={ this.handleTabChange }>
                                            <Tab eventKey={ QuestionType.multiple } title="Multiple Choice">
                                                <table className="answer-container" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="option-td" align="center" valign="middle">
                                                                <div className="input-group">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <button type="button" onClick={ this.handleMinus } className="btn bg-danger btn-sm inc-btn" id="minus-btn"><i className="fa fa-minus"></i></button>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="hidden" value="2" id="optionsQty" name="optionsQty"/>
                                                                                    <span className="qty_input">Options</span>
                                                                                </td>
                                                                                <td>
                                                                                    <button type="button" onClick={ this.handlePlus } className="btn bg-success btn-sm inc-btn" id="plus-btn"><i className="fa fa-plus"></i></button>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {
                                                                    this.state.options.map((optionObj, index) => {
                                                                        return (<CreateMultipleChoice key={ index } id={ optionObj.id } option={ optionObj.option } is_correct_option={ optionObj.is_correct_option } onContentChange={ this.handleOptionContent }/>);
                                                                    })
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Tab>
                                            <Tab className='col-md' eventKey={ QuestionType.fill } title="Fill up the Blanks">
                                                <h1 className="answer-container">Fill up the Blanks</h1>
                                            </Tab>
                                            <Tab className='col-md' eventKey={ QuestionType.written } title="Written">
                                                <h1 className="answer-container">Written</h1>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>    
                </form>
        </div>
    )   
  }
}

export default CreateQuestion;
