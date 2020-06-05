import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Library from "../splashPage/Library";
import BookList from "../books/BookList";
import PatronList from "../patrons/PatronList";
import BookDetails from "../books/BookDetails";
import PatronDetails from "../patrons/PatronDetails"
import BookForm from "../books/BookForm"
import PatronForm from "../patrons/PatronForm"
import Login from "./auth/Login"
import PatronEditForm from "../patrons/PatronEditForm"
import BookEditForm from "../books/BookEditForm"


class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Library />;
          }}
        />

        {/* BOOKS */}
        <Route
          exact
          path="/books"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BookList {...props} />;
            } else {
              //redirect to login
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/books/:bookId(\d+)"
          render={(props) => {
            // Pass the booksId to the BookDetailComponent --- \d+ has to be a digit
            return (
              <BookDetails
                bookId={parseInt(props.match.params.bookId)}
                {...props}
              />
            );
          }}
        />
           <Route
          path="/books/:bookId(\d+)/edit"
          render={(props) => {
            return <BookEditForm {...props} />;
          }}
        />
        <Route
          path="/books/new"
          render={(props) => {
            return <BookForm {...props} />;
          }}
        />

        {/* PATRONS */}
        <Route
          exact
          path="/patrons"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <PatronList {...props} />;
            } else {
              //redirect to login
              return <Redirect to="/login" />;
            }
          }}
        />
                <Route
          exact
          path="/patrons/:patronId(\d+)"
          render={(props) => {
            return (
              <PatronDetails
                patronId={parseInt(props.match.params.patronId)}
                {...props}
              />
            );
          }}
        />
            <Route
          path="/patrons/:patronId(\d+)/edit"
          render={(props) => {
            return <PatronEditForm {...props} />;
          }}
        />
        <Route
          path="/patrons/new"
          render={(props) => {
            return <PatronForm {...props} />;
          }}
        />

          {/* LOGIN */}

          <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
