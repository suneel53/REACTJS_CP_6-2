// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationsItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchUsers = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-cont">
        <div className="cont">
          <h1>Destination Search</h1>
          <div className="search-cont">
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="img-logo"
            />
          </div>
          <ul className="destination-item-cont">
            {searchUsers.map(each => (
              <DestinationsItem userDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
