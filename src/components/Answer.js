import React from 'react';

export default class Answer extends React.Component {
  
  handleClick = (e) => {
    e.preventDefault()
    this.props.answerQuestion(this.props.optionNumber)
  }
  
  render() {
    
    const questionIsAnswered = this.props.questionIsAnswered
    const answerVotersCount = this.props.answerVotersCount
    const totalVotersCount = this.props.totalVotersCount
    
    return (
      <button className='btn btn-primary btn-lg enabled w-100' disabled={questionIsAnswered} onClick={this.handleClick}>
        <p className='mt-2'>{this.props.answerText} {questionIsAnswered && this.props.chosen? '(Chosen)' : ''}</p>
{questionIsAnswered? <p>{answerVotersCount} out of {totalVotersCount} votes ({totalVotersCount !== 0? (answerVotersCount / totalVotersCount * 100).toFixed(2) : 0}%)</p> : ''}
      </button>
    )
  }
}