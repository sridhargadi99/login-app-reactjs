import './index.css'
import {Component} from 'react'

class Logout extends Component {
  logoutButton = () => {
    const {logoutFunction} = this.props
    logoutFunction(false)
  }

  render() {
    return (
      <button
        className="button-style1"
        type="button"
        onClick={this.logoutButton}
      >
        Logout
      </button>
    )
  }
}

export default Logout
