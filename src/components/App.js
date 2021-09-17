import React from 'react'
//import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import NavigationBar from './NavigationBar'
import CurrentPage from './CurrentPage'
import { handleInitialData } from '../actions/shared'

class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <div className='container'>
        <header className='mt-4'>
          <h1>Would You Rather...?</h1>
        </header>
        <main className='my-4'>
          {this.props.loading?
          <div className='text-center'>
            <div className='spinner-border text-primary mt-5' style={{width: '3rem', height: '3rem'}}/>
          </div> :
          this.props.currentUser === '' ? 
          <Login/> :
          <Router>
            <div className='lead'>Hello, {this.props.users[this.props.currentUser].name}</div>
            <br/>
            <NavigationBar/>
            <br/>
            <CurrentPage/>
          </Router>}
        </main>
      </div>
    )
  }
}

export default connect((state) => ({
  users: state.users,
  currentUser: state.currentUser,
  loading: state.loading
}))(App)