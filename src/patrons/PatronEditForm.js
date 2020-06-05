import React, { Component } from "react";
import PatronManager from "../modules/PatronManager";
// import './PatronForm.css'

class PatronEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    phone: "",
    email: "",
    DOB: "",
    active: "",
    loadingStatus: true
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  //new routing
  updateExistingPatron = (evt) => {
    //prevent refresh of page
    evt.preventDefault();
    //disable the button - can't keep clicking submit
    this.setState({ loadingStatus: true });
    //object that is going to database
    const editedPatron = {
      id: this.props.match.params.patronId,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      DOB: this.state.DOB,
      active: this.state.active
    };
    //send newly edited animal to API manager then reroute to /animals
    PatronManager.update(editedPatron).then(() =>
      this.props.history.push("/patrons")
    );
  };

  componentDidMount() {
    PatronManager.get(this.props.match.params.patronId).then((patron) => {
      this.setState({
        name: patron.name,
        phone: patron.phone,
        email: patron.email,
        DOB: patron.DOB,
        active: patron.active,
        loadingStatus: false,
      });
    });
  }
  // value = pre populated data that the user sees
  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phone"
                value={this.state.phone}
              />
              <label htmlFor="phone">Phone Number</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="DOB"
                value={this.state.DOB}
              />
              <label htmlFor="DOB">Date of Birth</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="active"
                value={this.state.active}
              />
              <label htmlFor="active">True or False</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingPatron}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default PatronEditForm;
