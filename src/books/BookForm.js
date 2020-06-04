import React, { Component } from 'react';
import BookManager from '../modules/BookManager';
// import './BookForm.css'

// loading status disable the button don't let them click it a million times
class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
        ISBN: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewBook = evt => {
        //this stops from loading on page load
        evt.preventDefault();
        if (this.state.title === "" || this.state.author === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            // matches what is in the database
            const book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                ISBN: this.state.ISBN
            };

            BookManager.post(book)
            .then(() => this.props.history.push("/books"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="author"
                        placeholder="Author"
                        />
                        <label htmlFor="author">Author</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="genre"
                        placeholder="Genre"
                        />
                        <label htmlFor="genre">Genre</label>
                    </div>
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ISBN"
                        placeholder="ISBN"
                        />
                        <label htmlFor="ISBN">ISBN</label>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default BookForm