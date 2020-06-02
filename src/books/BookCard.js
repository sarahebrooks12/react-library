import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class BookCard extends Component {
  render () {
  return (
    <div className="App">
      <form id="cards">
      <Container>
  <Row>
          <p>Title: {this.props.bookProp.title}</p>
          <p>Author: {this.props.bookProp.author}</p>
          <p>Genre: {this.props.bookProp.genre}</p>
          <p>ISBN: {this.props.bookProp.ISBN}</p>
  </Row>
</Container>
        {/* <div>
          <p>Title: {this.props.bookProp.title}</p>
          <p>Author: {this.props.bookProp.author}</p>
          <p>Genre: {this.props.bookProp.genre}</p>
          <p>ISBN: {this.props.bookProp.ISBN}</p>
        </div> */}
      </form>
    </div>
  );
}
}
export default BookCard;
