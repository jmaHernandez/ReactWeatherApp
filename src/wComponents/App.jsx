import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import CitySelect from './CitySelect';
import {
	getForecast
} from '../utils/weatherHelper';

const initialState = {
	forecast: {},
	cities: []
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = initialState;
		this.setState = this.setState.bind(this);
	}

	componentWillMount() {
		let that = this;
		getForecast("monterrey").then(
			function(response) {
				const forecast = response.data.query.results;
				that.setState({forecast: forecast});
			}
		)      
	}

	render(){
		return (
			<div className="container">
				<WeatherDisplay 
					forecast={this.state.forecast}
				/>
				<CitySelect />
			</div>
		)
	}

}

export default App;