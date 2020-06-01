import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Library from './splashPage/Library'
import BookList from './books/BookList'
//only include these once they are built - previous practice exercise
import PatronList from './patrons/PatronList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Library />
        }} />
        <Route path="/books" render={(props) => {
          return <BookList />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews