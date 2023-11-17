// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'

class Home extends Component {
  state = {condition: false}

  loginFunction = value => {
    this.setState({condition: value})
  }

  logoutFunction = value => {
    this.setState({condition: value})
  }

  render() {
    const {condition} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          {condition === false ? (
            <Message message="Please Login" />
          ) : (
            <Message message="Welcome User" />
          )}
          {condition === false ? (
            <Login loginFunction={this.loginFunction} />
          ) : (
            <Logout logoutFunction={this.logoutFunction} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
