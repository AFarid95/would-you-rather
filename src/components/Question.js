import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Answers from './Answers'
import Avatar from './Avatar'
import Timestamp from './Timestamp'
import NotFound from './NotFound'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends React.Component {
  
  answerQuestion = (answer) => this.props.dispatch(handleAnswerQuestion(this.props.currentUser, this.props.question.id, answer))
  
  render() {
    
    const currentUser = this.props.currentUser
    
    return (
      <div>
        <h2 className='mb-4'>Would you rather...</h2>
        <div className='row'>
          <div className='col'>
            <Answers optionOneText={this.props.question.optionOne.text} optionTwoText={this.props.question.optionTwo.text} optionOneVotersCount={this.props.question.optionOne.votes.length} optionTwoVotersCount={this.props.question.optionTwo.votes.length} chosenOption={this.props.question.optionOne.votes.includes(currentUser)? 'optionOne' : this.props.question.optionTwo.votes.includes(currentUser)? 'optionTwo' : 'none'} answerQuestion={this.answerQuestion}/>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-4'>
            <div className='row'>
              <div className='col-md-auto'>
                <Avatar height='100' user={this.props.users[this.props.question.author].id} />
              </div>
              <div className='col'>
                <div className='fw-bold'>Asked by</div>
                <div>{this.props.users[this.props.question.author].name}</div>
                <Timestamp timestamp={this.props.question.timestamp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function QuestionConnector(props) {
  let { questionId } = useParams()
  return props.questions[questionId] !== undefined? <Question question={props.questions[questionId]} currentUser={props.currentUser} users={props.users} dispatch={props.dispatch} /> : <NotFound/>
}

export default connect((state) => ({
  questions: state.questions,
  currentUser: state.currentUser,
  users: state.users
}))(QuestionConnector)