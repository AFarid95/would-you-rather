import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'

class NavigationBar extends React.Component {

    logout = (e) => {
        this.props.dispatch(logout())
    }

    render() {
        return (
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='nav'>
                <li className='nav-item btn-outline-info'>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item btn-outline-info'>
                    <Link className='nav-link' to="/add">Add a New Question</Link>
                </li>
                <li className='nav-item btn-outline-info'>
                    <Link className='nav-link' to="/leaderboard">Leaderboard</Link>
                </li>
                <li className='nav-item btn-outline-info'>
                    <button className='nav-link btn btn-link' onClick={this.logout}>Logout</button>
                </li>
            </ul>
          </nav>
        )
    }
}

export default connect((state) => ({}))(NavigationBar)