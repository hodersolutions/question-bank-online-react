import React, { Component } from 'react';
import './CreateQuestion.css';

class CreateQuestion extends Component {
  render() {
    return (
        <div className="container" id="addQuestion">
            <form action="/question" method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <h3 className="header">Add Question</h3>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3">
                        <div className="form-group">
                            <input className="btn btn-md btn-primary" id="validate" name="validate" type="button" value="Validate"/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3">
                        <div className="form-group">
                            <input className="btn btn-md btn-success" id="submit" name="submit" type="submit" value="Upload"/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3">
                        <div className="form-group">
                            <input className="btn btn-md btn-secondary" id="clear" name="clear" type="button" value="Clear"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <textarea className="form-control" id="question" name="question" placeholder="Question"></textarea>
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
                        <div className="container-fluid answer">
                            <div className="row">
                                <div className="col-md">
                                    <input type="hidden" value="multiple" id="selectedType" name="selectedType"/>
                                    <nav>
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-multiple-tab" data-toggle="tab" href="#nav-multiple" role="tab" aria-controls="nav-multiple" aria-selected="true">Multiple choise</a>
                                            <a className="nav-item nav-link" id="nav-fill-in-tab" data-toggle="tab" href="#nav-fill-in" role="tab" aria-controls="nav-fill-in" aria-selected="false">Fill up the blanks</a>
                                            <a className="nav-item nav-link" id="nav-written-tab" data-toggle="tab" href="#nav-written" role="tab" aria-controls="nav-written" aria-selected="false">Written</a>
                                        </div>
                                    </nav>
                                    <div>
                                        <div className="tab-pane fade show active" id="nav-multiple" role="tabpanel" aria-labelledby="nav-multiple-tab">
                                            <table id="answerContainer" border="0">
                                                <tr>
                                                    <td className="option-td" align="center" valign="middle">
                                                        <div className="input-group">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <button type="button" className="btn bg-danger btn-sm inc-btn" id="minus-btn"><i className="fa fa-minus"></i></button>
                                                                    </td>
                                                                    <td>
                                                                        <input type="hidden" value="2" id="optionsQty" name="optionsQty"/>
                                                                        <span className="qty_input">Options</span>
                                                                    </td>
                                                                    <td>
                                                                        <button type="button" className="btn bg-success btn-sm inc-btn" id="plus-btn"><i className="fa fa-plus"></i></button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td className="option-td" align="center" valign="middle">
                                                        Answer
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="option-td option-text" align="center" valign="middle">
                                                        <div className="form-group shadow-textarea">
                                                            <textarea className="form-control option" id="option1Text" name="option1Text" placeholder="Option 1"></textarea>
                                                        </div>
                                                    </td>
                                                    <td className="option-td" align="center" valign="middle">
                                                        <label className="switch ">
                                                            <input type="checkbox" id="option1" name="option1" className="success"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="option-td option-text" align="center" valign="middle">
                                                        <div className="form-group shadow-textarea">
                                                            <textarea className="form-control option" id="option2Text" name="option2Text" placeholder="Option 2"></textarea>
                                                        </div>
                                                    </td>
                                                    <td className="option-td" align="center" valign="middle">
                                                        <label className="switch ">
                                                            <input type="checkbox" id="option2" name="option2" className="success"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="tab-pane fade" id="nav-fill-in" role="tabpanel" aria-labelledby="nav-fill-in-tab">
                                            Content
                                        </div>
                                        <div className="tab-pane fade" id="nav-written" role="tabpanel" aria-labelledby="nav-written-tab">
                                            Content
                                        </div>
                                    </div>
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
