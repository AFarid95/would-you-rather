import React from 'react'
import { connect } from 'react-redux'

class Avatar extends React.Component {

    render() {
        return (
            <img height={this.props.height} src={this.props.users[this.props.user] !== undefined? this.props.users[this.props.user].avatarURL : ''} alt={this.props.users[this.props.user] !== undefined? this.props.users[this.props.user].name + '\'s avatar' : 'Anonymous'}/>
        )
    }
}

export default connect((state) => ({
  users: state.users
}))(Avatar)