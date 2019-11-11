import React from 'react';
import './Business.css';

class Business extends React.Component {
	render(){
		return (
			<div className="Business">
			  <h2>Flight {this.props.business.id}</h2>
			  <div className="Business-information">
				<div className="Business-address">
				  <p>{this.props.business.from}</p>
				  <p>{this.props.business.to}</p>
				  <p>{this.props.business.airline}</p>
				</div>
				<div className="Business-reviews">
				  <h3>{this.props.business.departure}</h3>
				  <h3 className="rating">{this.props.business.arrival} stars</h3>
				  <p>&nbsp;</p>
				</div>
			  </div>
			</div>
		)
	}
}

export default Business;
