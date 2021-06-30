// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onCounter = () => {
    const random = this.randomNumber()
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onCounter}>
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
