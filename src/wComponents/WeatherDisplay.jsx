import React from 'react';

export class ForecastRow extends React.Component {
    constructor(props) {
        super(props);
        this.renderTemp = this.renderTemp.bind(this);
    }

    renderTemp(temp){
    	if (this.props.celcius) {
    		return ((temp/(1.8)-32).toFixed(2)+"ºC");  
    	} else {
    		return temp + "ºF";
    	}
    }

    render() {
        return (
        	<li className="collection-item">
						<div className="row">
							<div className="col s3">
								{this.props.day}
							</div>
							<div className="col s3">
								Low: {this.renderTemp(this.props.low)}
							</div>
							<div className="col s3">
								High: {this.renderTemp(this.props.high)}
							</div>
							<div className="secondary-content">
								<img src={`http://l.yimg.com/a/i/us/we/52/${this.props.code}.gif`} alt="">
								</img>
							</div>
						</div>
					</li>
        )
	    }
		}


class WeatherDisplay extends React.Component{
	constructor(props){
		super(props);
		this.state = {celcius: false};
		this.setCelcius = this.setCelcius.bind(this);
		this.setFarenheit = this.setFarenheit.bind(this);
	}
	componentWillMount() {
		if (this.props.forecast.channel) {
			this.setState({isValid: true});
		} else {
			this.setState({isValid: false});
		}
	}
	componentWillReceiveProps(nextProps) {
    if (nextProps.forecast.channel) {
			this.setState({isValid: true});
		} else {
			this.setState({isValid: false});
		}  
	}

	setCelcius(){
		this.setState({celcius: true});
	}

	setFarenheit(){
		this.setState({celcius: false});
	}

	shouldComponentUpdate(nextProps, nextState) {
	    return this.state != nextState || this.props != nextProps;  
	}

	render(){
		const {channel} = this.props.forecast;
		const {celcius} = this.state;
		if (this.state.isValid != true) {
			return null;
		}
		return(
			<div className="card">
				<div className="card-content">
					<a onClick={this.setCelcius} className="btn">Celcius</a>
					<a onClick={this.setFarenheit} className="btn">Farenheit</a>
					<ul className="collection">
					{
						channel.item.forecast.map(function(forecast, index) {
							return(
								<ForecastRow key={index}
									{...forecast}
									celcius={celcius}
								/>
							)
						})
					}
					</ul>
				</div>
			</div>
		)
	}
}

export default WeatherDisplay;