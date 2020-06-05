import React, { Component } from "react";
import BookManager from "../modules/BookManager";
// import './BookForm.css'

class BookEditForm extends Component {
  //set the initial state
  state = {
    title: "",
    author: "",
    genre: "",
    ISBN: "",
    loadingStatus: true
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  //new routing
  updateExistingBook = (evt) => {
    //prevent refresh of page
    evt.preventDefault();
    //disable the button - can't keep clicking submit
    this.setState({ loadingStatus: true });
    //object that is going to database
    const editedBook = {
      id: this.props.match.params.bookId,
      title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        ISBN: this.state.ISBN,
        photo: this.taco.photo,
        available: this.taco.available
    };
    //send newly edited animal to API manager then reroute to /animals
    BookManager.update(editedBook).then(() =>
      this.props.history.push("/books")
    );
  };

taco = {}

  componentDidMount() {
    BookManager.get(this.props.match.params.bookId).then((book) => {
        this.taco.photo = book.photo
        this.taco.available = book.available
      this.setState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        ISBN: book.ISBN,
        loadingStatus: false,
      });
    });
  }
  // value = pre populated data that the user sees
  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="author"
                value={this.state.author}
              />
              <label htmlFor="author">Author</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="genre"
                value={this.state.genre}
              />
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ISBN"
                value={this.state.ISBN}
              />
              <label htmlFor="ISBN">ISBN</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default BookEditForm;