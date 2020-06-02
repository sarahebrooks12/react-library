import React, { Component } from 'react'
    //import the components we will need
    import BookCard from './BookCard'
    import BookManager from '../modules/BookManager'
    import Container from 'react-bootstrap/Container';
    import Row from 'react-bootstrap/Row';


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
          <>
          <p>Search Books:</p>
        <input type="text" id="search-books" placeholder="Search"></input>
        <Container>
          <div className="container-cards">
          <Row>
            {this.state.books.map(bookInLoop =>
              <BookCard key={bookInLoop.id} bookProp={bookInLoop} />
            )}
            </Row>
          </div>
          </Container>
          </>
        )
      }
}

export default BookList