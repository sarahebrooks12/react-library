import React, { Component } from 'react';
import PatronManager from '../modules/PatronManager';
// import './PatronForm.css'

// loading status disable the button don't let them click it a million times
class PatronForm extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        DOB: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewPatron = evt => {
        //this stops from loading on page load
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            // matches what is in the database
            const patron = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                DOB: this.state.DOB
            };

            PatronManager.post(patron)
            .then(() => this.props.history.push("/patrons"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phone"
                        placeholder="Phone"
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="DOB"
                        placeholder="DOB"
                        />
                        <label htmlFor="DOB">DOB</label>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewPatron}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default PatronForm