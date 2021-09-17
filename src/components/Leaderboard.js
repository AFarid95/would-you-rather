import React from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

class Leaderboard extends React.Component {
  
  render() {
    return (
      <div>
        <h2 className='mb-4'>Leaderboard</h2>
        <ol className='list-group list-group-numbered'>
        {Object.values(this.props.users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)).map((user) =>
          <li key={user.id} className='list-group-item'>
            <UserStats user={user.id} />
          </li>)}
        </ol>
      </div>
    )
  }
}

export default connect((state) => ({
    users: state.users
}))(Leaderboard)