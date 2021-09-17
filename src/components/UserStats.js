import React from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class UserStats extends React.Component {

    render() {
        return (
            <div className='row mt-1'>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-md-auto'>
                            <Avatar height='100' user={this.props.user} />
                        </div>
                        <div className='col'>
                            <p className='fw-bold'>{this.props.users[this.props.user].name}</p>
                            <div>Asked questions: {this.props.users[this.props.user].questions.length}</div>
                            <div>Answered questions: {Object.keys(this.props.users[this.props.user].answers).length}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
  users: state.users
}))(UserStats)