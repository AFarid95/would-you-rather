import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser'
import Avatar from './Avatar'

class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {selectedUser: Object.values(this.props.users)[0] !== undefined? Object.values(this.props.users)[0].id : ''}
  }
  
  handleSelectedUserChange = (e) => this.setState({selectedUser: e.target.value})
  
  login = (e) => {
    e.preventDefault()
    this.props.dispatch(login(this.state.selectedUser))
  }
  
  render() {
    return (
      <div className='row'>
        <div className='col'/>
        <div className='col-md-auto card'>
          <Avatar user={this.state.selectedUser} height='300' />
          <select className='my-2' value={this.state.selectedUser} onChange={this.handleSelectedUserChange}>
          {Object.keys(this.props.users).map((userId) => <option key={this.props.users[userId].id} value={this.props.users[userId].id}>{this.props.users[userId].name}</option>)}
          </select>
          <button className='mb-2' onClick={this.login}>Login</button>
        </div>
        <div className='col'/>
      </div>
    )
  }
}

export default connect((state) => ({
  users: state.users
}))(Login)