import React, {Component} from 'react'
import HomePage from './HomePage'
import './App.css'

class App extends Component {
  state = {
    selChar: {}
  }

  setSelChar = data => {
    this.setState(() => ({selChar: data}))
  }

  render() {
    return (
      <div className='App'>
        <div className='app-container'>
          <HomePage selChar={this.state.selChar} setSelChar={this.setSelChar} />
        </div>
      </div>
    )
  }
}

export default App
