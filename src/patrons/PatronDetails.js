import React, { Component } from "react";
import PatronManager from "../modules/PatronManager";
// import './PatronDetail.css'

class PatronDetails extends Component {
    isPatronId = () => this.state.name !== undefined
  state = {
    name: "",
    phone: "",
    email: "",
    DOB: "",
    loadingStatus: true,
  };

  componentDidMount() {
    //get(id) from PatronManager and hang on to the data; put it into state
    PatronManager.get(this.props.patronId).then((patron) => {
      this.setState({
        name: patron.name,
        phone: patron.phone,
        email: patron.email,
        DOB: patron.DOB,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in patronManger and re-direct to the patron list.
    this.setState({ loadingStatus: true });
    PatronManager.deletePatron(this.props.patronId).then(() =>
      this.props.history.push("/patrons")
    );
  };
  handleArchive = () => {
    this.setState({ loadingStatus: true });
    PatronManager.archivePatron(this.props.patronId).then(() =>
      this.props.history.push("/patrons")
    );
  };

  render() {
    return (
        this.isPatronId() ?
      <div className="card">
        <div className="card-content">
          <h5>{this.state.name}</h5>
          <h5>{this.state.phone}</h5>
          <p>{this.state.email}</p>
          <p>{this.state.DOB}</p>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Remove
          </button>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleArchive}
          >
            Archive
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/patrons/${this.props.patronId}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      :
       <h3>This person is not a patron at this library.</h3>       
     );
  }
}

export default PatronDetails;