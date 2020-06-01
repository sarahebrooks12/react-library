import React, { Component } from "react";

class PatronCard extends Component {
  render() {
    return (
      <div className="App">
        <form id="cards">
          <h2>List of Patrons:</h2>
          <div>
            <br />
            <p>{this.props.patronProp.name}</p>
          </div>
        </form>
      </div>
    );
  }
}
export default PatronCard;
