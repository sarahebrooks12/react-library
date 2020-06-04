import React, { Component } from "react";

class PatronCard extends Component {
  isPatronAvailable = () => this.props.patronProp.active === true;
  render() {
    return (
      this.isPatronAvailable() ?
      <div className="App">
        <form id="cards">
          <div>
            <br />
            <p><strong>{this.props.patronProp.name}</strong></p>
          </div>
        </form>
      </div>
      :
      <div></div>
    );
  }
}
export default PatronCard;
