import React from 'react';
import Answer from './Answer'

export default class Answers extends React.Component {
  
  render() {
    
    const optionOneVotersCount = this.props.optionOneVotersCount
    const optionTwoVotersCount = this.props.optionTwoVotersCount
    const totalVotersCount = optionOneVotersCount + optionTwoVotersCount
    const chosenOption = this.props.chosenOption
    const optionOneIsChosen = chosenOption === 'optionOne'
    const optionTwoIsChosen = chosenOption === 'optionTwo'
    const questionIsAnswered = optionOneIsChosen || optionTwoIsChosen
    
    return (
      <div>
        <Answer optionNumber='optionOne' answerText={this.props.optionOneText} answerVotersCount={optionOneVotersCount} totalVotersCount={totalVotersCount} questionIsAnswered={questionIsAnswered} chosen={optionOneIsChosen} answerQuestion={this.props.answerQuestion} />
        <p className='text-center my-2 fw-bold'>OR</p>
        <Answer optionNumber='optionTwo' answerText={this.props.optionTwoText} answerVotersCount={optionTwoVotersCount} totalVotersCount={totalVotersCount} questionIsAnswered={questionIsAnswered} chosen={optionTwoIsChosen} answerQuestion={this.props.answerQuestion} />
      </div>
    )
  }
}