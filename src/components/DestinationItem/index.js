// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationsItem extends Component {
  render() {
    const {userDetails} = this.props
    const {name, imgUrl} = userDetails
    return (
      <li className="destination-item">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationsItem
