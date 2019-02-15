import React, { Component } from 'react';
import QuestionSummary from './QuestionSummary';

class QuestionList extends Component {
  render() {
    return (
      <div className="question-list section">
        <QuestionSummary />
        <QuestionSummary />
        <QuestionSummary />
      </div>
    )
  }
}

export default QuestionList;