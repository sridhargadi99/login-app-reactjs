// Write your code here
import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {message} = this.props
    return <h1 className="heading-style">{message}</h1>
  }
}

export default Message
