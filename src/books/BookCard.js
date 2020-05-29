import React from "react";

function BookCard () {
  return (
    <div className="App">
      <form id="cards">
        <p>Search Books:</p>
        <div>
        <input type="text" id="search-books" placeholder="Search"></input>
        </div>
      </form>
    </div>
  );
}

export default BookCard;