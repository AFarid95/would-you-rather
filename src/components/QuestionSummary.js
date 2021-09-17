import React from 'react';
import { Link } from 'react-router-dom'
import Timestamp from './Timestamp'

export default class QuestionSummary extends React.Component {
  
  render() {
    return (
      <div className='card my-4'>
        <div className='card-body'>
          <h3 className='card-title'>{this.props.question.optionOne.text} or {this.props.question.optionTwo.text}</h3>
          <div className='card-subtitle mb-2'><Timestamp timestamp={this.props.question.timestamp} /></div>
          <Link className='card-link' to={`questions/${this.props.question.id}`}>Open question</Link>
        </div>
      </div>
    )
  }
}