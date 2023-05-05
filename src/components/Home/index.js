// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {IsButtonClick: false}

  TextChange = () => {
    this.setState(prevState => ({IsButtonClick: !prevState.IsButtonClick}))
  }

  getButtonText = () => {
    const {IsButtonClick} = this.state

    return IsButtonClick ? 'Logout' : 'Login'
  }

  getHeadingText = () => {
    const {IsButtonClick} = this.state

    return IsButtonClick ? 'Welcome User' : 'Please Login'
  }

  render() {
    const buttonText = this.getButtonText()
    const heading = this.getHeadingText()

    return (
      <div className="HomePage">
        <div className="HomePage-InnerBlock">
          <h1>{heading}</h1>
          <button type="button" className="buttonA" onClick={this.TextChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
