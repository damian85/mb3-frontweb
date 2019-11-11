import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  id: 'MarginOtto Pizzeria',
  from: '1010 Paddington Way',
  to: 'Flavortown',
  state: 'NY',
  airline: '10101',
  departure: 'Italian',
  arrival: 4.5,
  reviewCount: 90
};

let businesses = [business,business,business,business,business,business];
	

class App extends React.Component {
  searchYelp(term,location,sortBy){
	console.log("Searching Yelp with "+term+", "+location+", "+ sortBy);
  }
  render(){
	  return (
		<div className="App">
		  <h1>Octank Travel - Flight Search</h1>
		  <SearchBar searchYelp={this.searchYelp} />
		  <BusinessList businesses={businesses} /> 
		</div>
	  );
	}
}

export default App;
