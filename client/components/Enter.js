import React, { Component } from 'react'

class Enter extends Component {

  render () {
    return (
      <div id='enter-wrapper'>
        <div className='css-typing'>

          <p className='type1'>
            Want to listen to
          </p>

          <p className='type2'>
            some sweet jams?<span className='blink'>|</span>
          </p>

        </div>

        <div id='options'>
          <button className='yes'>Lets Jam</button>
          <button className='no'>No Thanks</button>
        </div>

      </div>
    )
  }

}

export default Enter
