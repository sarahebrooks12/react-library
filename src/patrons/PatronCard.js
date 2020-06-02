import React, { Component } from "react";

class PatronCard extends Component {
  render() {
    return (
      <div className="App">
        <form id="cards">
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
