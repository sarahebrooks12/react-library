import React, { Component } from 'react';

class BookCard extends Component {
  render () {
  return (
    <div className="App">
      <form id="cards">
        <p>Search Books:</p>
        <input type="text" id="search-books" placeholder="Search"></input>
        <div>
          <p>Title: {this.props.bookProp.title}</p>
          <p>Author: {this.props.bookProp.author}</p>
          <p>Genre: {this.props.bookProp.genre}</p>
          <p>ISBN: {this.props.bookProp.ISBN}</p>
        </div>
      </form>
    </div>
  );
}
}
export default BookCard;
