import React, {Component} from 'react'
import HomePage from './HomePage'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='app-container'>
          <HomePage />
        </div>
      </div>
    )
  }
}

export default App
