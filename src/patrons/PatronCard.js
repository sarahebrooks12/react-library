import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/patrons/${this.props.patronProp.id}`}>
          <button>Details</button>
          </Link>
          </div>
        </form>
      </div>
      :
      <div></div>
    );
  }
}
export default PatronCard;
