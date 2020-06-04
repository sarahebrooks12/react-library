import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./components/ApplicationViews"

import "./splashPage/Library.css"

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default Main