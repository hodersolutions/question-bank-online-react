import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

class QuestionList extends Component {
  render() {
    return (
      <div className="question-list section">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    )
  }
}

export default QuestionList;