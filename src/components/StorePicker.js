import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		// Stop the form from submiting
		event.preventDefault();
		// get the text from that input
		const storeName = this.myInput.value.value
		// Change the page to /store/lorem-inpum
		this.props.history.push(`/store/${storeName}`)
	}

	render () {
		return (
			<form className="store-selector" onSubmit={this.goToStore} >
				{ /* this a store picker */}
				<h2>Please Enter a Store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					placeholder="Store Name" 
					required defaultValue={getFunName()} 
				/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;