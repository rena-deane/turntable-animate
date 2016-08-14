import React, { Component } from 'react'
import Enter from './Enter';

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='app-wrapper'>
        <Enter />
      </div>
    )
  }

}

export default App
