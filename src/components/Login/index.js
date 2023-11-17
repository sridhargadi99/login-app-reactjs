import './index.css'
import {Component} from 'react'

class Login extends Component {
  loginButton = () => {
    const {loginFunction} = this.props
    loginFunction(true)
  }

  render() {
    return (
      <button className="button-style" type="button" onClick={this.loginButton}>
        Login
      </button>
    )
  }
}

export default Login
