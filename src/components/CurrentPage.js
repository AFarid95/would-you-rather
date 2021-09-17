import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'

export default class CurrentPage extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/questions/:questionId'>
          <Question/>
        </Route>
        <Route path='/add'>
          <AddQuestion/>
        </Route>
        <Route path='/leaderboard'>
          <Leaderboard/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    )
  }
}