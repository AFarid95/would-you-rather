import React from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'
import { UNANSWERED } from '../reducers/shownQuestions'
import { toggleShownQuestions } from '../actions/shownQuestions'

class Home extends React.Component {

    toggleShownQuestions = (e) => {
        e.preventDefault()
        this.props.dispatch(toggleShownQuestions())
    }

    render() {

        const shownQuestions = this.props.shownQuestions
        const currentUser = this.props.currentUser

        return (
            <div>
                <h2 className='mb-4'>Home</h2>
                <button onClick={this.toggleShownQuestions}>{shownQuestions === UNANSWERED ? 'Show answered questions' : 'Show unanswered questions'}</button>
                {Object.values(this.props.questions).filter((question) => {
                    const questionIsAnswered = question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)
                    return shownQuestions === UNANSWERED ? !questionIsAnswered : questionIsAnswered
                }).sort((a, b) => b.timestamp - a.timestamp).map((question) => <QuestionSummary key={question.id} question={question} />)}
            </div>
        )
    }
}

export default connect((state) => ({
    shownQuestions: state.shownQuestions,
    questions: state.questions,
    currentUser: state.currentUser
}))(Home)