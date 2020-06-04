import React, { Component } from 'react'
    //import the components we will need
    import PatronCard from './PatronCard'
    import PatronManager from '../modules/PatronManager'

    class PatronList extends Component {
        //define what this component needs to render
        state = {
            patrons: [],
        }

    componentDidMount(){
        //getAll from Manager and hang on to that data; put it in state
        PatronManager.getAll()
        .then((patrons) => {
            this.setState({
                patrons: patrons
            })
        })
    }

    render(){
      
        return(
          <>
          <h2>List of Patrons:</h2>
          <div>
            {this.state.patrons.map(patronInLoop =>
              <PatronCard key={patronInLoop.id} patronProp={patronInLoop} />
            )}
          </div>
          </>
        )
      }
}

export default PatronList