import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Library from './splashPage/Library'
import BookCard from './books/BookCard'
//only include these once they are built - previous practice exercise
import PatronCard from './patrons/PatronCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Library />
        }} />
        <Route path="/books" render={(props) => {
          return <BookCard />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews