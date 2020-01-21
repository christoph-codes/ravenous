import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// const business = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// }
// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business,
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);

  }
  searchYelp(term, location, sortBy) {
    // console.log(`Searching Yelp for ${term} in ${location} by ${sortBy}`);
    Yelp.search(term, location, sortBy)
      .then((businesses) => {
        if( businesses ) {
          this.setState({
            businesses: businesses
          })
        } else {
          console.log("No Businesses")
        }
      });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList feed={ this.state.businesses } />
      </div>
    );
  }
}

export default App;