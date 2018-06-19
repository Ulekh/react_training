import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	state = {
		fishes: {

		},
		order: {},
	};
	addFish = fish => {
		
	};
	render () {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh seafood market"/>			
				</div>
				<Inventory addFish={this.addFish}/>
				<Order/>
			</div>
		)
	}
}

export default App;