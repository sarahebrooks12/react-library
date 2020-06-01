import React, { Component } from 'react'
    //import the components we will need
    import BookCard from './BookCard'
    import BookManager from '../modules/BookManager'

    class BookList extends Component {
        //define what this component needs to render
        state = {
            books: [],
        }

    componentDidMount(){
        //getAll from Manager and hang on to that data; put it in state
        BookManager.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        })
    }

    render(){
      
        return(
          <div className="container-cards">
            {this.state.books.map(bookInLoop =>
              <BookCard key={bookInLoop.id} bookProp={bookInLoop} />
            )}
          </div>
        )
      }
}

export default BookList