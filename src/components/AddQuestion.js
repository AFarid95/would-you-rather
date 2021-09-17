import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddQuestion extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {optionOne: '', optionTwo: '', redirect: false}
  }
  
  handleOptionOneChange = (e) => this.setState({optionOne: e.target.value})
  
  handleOptionTwoChange = (e) => this.setState({optionTwo: e.target.value})
  
  addQuestion = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, this.props.currentUser))
    this.setState({redirect: true})
  }
  
  render() {
    return (
      <div>
        {this.state.redirect? <Redirect to='/' /> : ''}
        <form className='border rounded'>
          <fieldset className='p-4'>
            <legend>Would you rather</legend>
            <label className='form-label' htmlFor='optionOne'>Option One </label>
            <input className='form-control' type='text' id='optionOne' name='optionOne' value={this.state.optionOne} onChange={this.handleOptionOneChange}/>
            <br/>
            <label className='form-label' htmlFor='optionTwo'>Option Two </label>
            <input className='form-control' type='text' id='optionTwo' name='optionTwo' value={this.state.optionTwo} onChange={this.handleOptionTwoChange}/>
            <br/>
            <button className='btn btn-primary' type="submit" disabled={this.state.optionOne === '' || this.state.optionTwo === ''} onClick={this.addQuestion}>Add Question</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect((state) => ({
    currentUser: state.currentUser
}))(AddQuestion)