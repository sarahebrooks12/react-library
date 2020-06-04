import React, { Component } from "react";
import BookManager from "../modules/BookManager";
// import './BookDetail.css'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class BookDetails extends Component {
  isBookId = () => this.state.title !== undefined;
  state = {
    title: "",
    author: "",
    genre: "",
    ISBN: "",
    photo: "",
    loadingStatus: true,
  };

  componentDidMount() {
    //get(id) from BookManager and hang on to the data; put it into state
    BookManager.get(this.props.bookId).then((book) => {
      this.setState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        ISBN: book.ISBN,
        photo: book.photo,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in BookManger and re-direct to the book list.
    this.setState({ loadingStatus: true });
    BookManager.deleteBook(this.props.bookId).then(() =>
      this.props.history.push("/books")
    );
  };
  handleArchive = () => {
    this.setState({ loadingStatus: true });
    BookManager.archiveBook(this.props.bookId).then(() =>
      this.props.history.push("/books")
    );
  };

  render() {
    return (
    this.isBookId() ? 
    <Col sm>
      <div className="card">
        <div className="card-content">
          <h5>{this.state.title}</h5>
          <h5>{this.state.author}</h5>
          <p>{this.state.genre}</p>
          <p>{this.state.ISBN}</p>
          <div>
      <Image src={this.state.photo} fluid/>
      </div>
                {/* <img src={this.state.photo} alt="BookPhoto"></img> */}
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Remove
          </button>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleArchive}
          >
            Archive
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/books/${this.props.bookId}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </Col>    
    :
     
      <h1>This book is not available at this library.</h1>
    );
  }
}

export default BookDetails;
