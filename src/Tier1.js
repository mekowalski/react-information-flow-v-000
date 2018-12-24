import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick = () => {
    let newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    let newColor = getRandomColor
    this.setState({
      ...this.state,
      childColor: newColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className='tier1' style={{backgroundColor: this.state.color, color: this.state.colo}}>
        <Tier2 color={this.state.childColor} handleClick={this.handleClick} />
        <Tier2 color={this.state.childColor} handleClick={this.handleClick} />
      </div>
    )
  }
}
