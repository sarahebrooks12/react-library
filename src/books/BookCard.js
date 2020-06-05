import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

class BookCard extends Component {
  isBookAvailable = () => this.props.bookProp.available === true;
  render () {
  return (
    this.isBookAvailable() ? 
    // NEED SOME MARGINS IN HERE
    <Col sm>
      <div className="App" >
          <p>Title: {this.props.bookProp.title}</p>
          <p>Author: {this.props.bookProp.author}</p>
          <Link to={`/books/${this.props.bookProp.id}`}>
          <button>Details</button>
          </Link>
          </div>
          </Col>
          :
          //add some serious CSS to this
          <div><p>
            <strong>{this.props.bookProp.title}</strong> is currently checked out.
            </p></div>
   
  );
}
}
export default BookCard;
