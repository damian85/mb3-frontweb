import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './SearchBar.css';
import "react-datepicker/dist/react-datepicker.css";



class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			from: '',
			to: '',
			startDate: ''
		};
		//this.handleSortByChange = this.handleSortByChange.bind(this);
		this.handleFromChange = this.handleFromChange.bind(this);
		this.handleToChange = this.handleToChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleDate = this.handleDate.bind(this);
		
	}
	
	/*state = {
		startDate: new Date()
	  };*/
	 
	  handleDate = date => {
		
		this.setState({
		  startDate: new Date(date)
		});
	  };
	
	
	handleFromChange(event){
		this.setState({
			from: event.target.value
		});
	}
	
	handleToChange(event){
		this.setState({
			to: event.target.value
		});
	}
	
	handleSearch(event){
		let date = new Date(this.state.startDate);
		let newDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		
		let params = '?from=' + this.state.from + '&to=' + this.state.to + '&date='+ newDate;
		let url = 'https://7fbvuzi711.execute-api.us-east-1.amazonaws.com/Dev/getflights' + params;
		
		fetch(url).then(res => res.json()).then(json => alert(json));
	/*
		let response = async () => {
			try{
			await fetch(url);
            if (response.ok) {
                let resData = await response.json();
                alert(JSON.stringify(resData,null,2));
                /*if ((resData).length == 0) {
                    setIsLoading(false);
                    setResult('');
                    setSearched(false);
                    setNotification('No flights available in the selected date!');
                } else {
                    setIsLoading(false);
                    setNotification('');
                    setSearched(true);
                    setResult(resData);
                }

            } else {
               //setResult('No flights available for the selected dates');
            }
            //throw new Error('No results!');
            //console.log(resData);
            //return resData;
        } catch (err) {
            console.error(err);
        }
		}
	*/
	
		//this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
		event.preventDefault();
	}
	
		
	render(){
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
				<ul>
				Find your next flight!
				</ul>
			  </div>
			  <div className="SearchBar-fields">
				<input placeholder="From..." onChange={this.handleFromChange} />
				<input placeholder="To..." onChange={this.handleToChange} />
				<DatePicker placeholderText="Date..." selected={this.state.startDate} onChange={date => this.handleDate(date)} />
			  </div>
			  <div className="SearchBar-submit">
				<a onClick={this.handleSearch}>Let's Go</a>
			  </div>
			</div>
		);
	}
}

export default SearchBar;