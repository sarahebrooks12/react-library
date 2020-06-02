import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
class BookCard extends Component {
  render () {
  return (
    
    <Col sm>
      <div className="App">
          <p>Title: {this.props.bookProp.title}</p>
          <p>Author: {this.props.bookProp.author}</p>
          <p>Genre: {this.props.bookProp.genre}</p>
          <p>ISBN: {this.props.bookProp.ISBN}</p>
          </div>
          </Col>
   
  );
}
}
export default BookCard;
