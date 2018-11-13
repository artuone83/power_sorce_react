import React, {Component} from 'react';
import TotalPower from './total_power';
import axios from 'axios';
const apiURL = 'https://challenge.codetain.com/api/v1/charging_status'; 
class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiURL: 'https://challenge.codetain.com/api/v1/charging_status',
			falconURL: 'https://challenge.codetain.com/api/v1/charging_status?priority=falcon',
			falconURL:'https://challenge.codetain.com/api/v1/charging_status?priority=falcon',
			totalPower: 0,
			falconPower: 0,
			saberPower: 0
		}
		this.setFalconPower = this.setFalconPower.bind(this);
		this.setSaberPower = this.setSaberPower.bind(this);
	}
	componentDidMount() {		
			axios.get(apiURL)
				.then(res => {
					this.setState({
						falconPower: res.data.charging_status.falcon,
						saberPower: res.data.charging_status.lightsaber,
						totalPower: this.state.falconPower + this.state.saberPower
					});
					console.log(res.data.charging_status.falcon);
					console.log(res.data.charging_status.lightsaber);
					console.log(this.state.totalPower);
				})
		}
	setFalconPower() {
		this.setState({
			falconPower: Math.floor(Math.random() * 8),
			totalPower: this.state.falconPower,		
		});				
	}
	setSaberPower() {
		this.setState({
			saberPower: Math.floor(Math.random() * 8),
			//totalPower: this.state.saberPower,		
		});
	}
	render() {
		return (
			<section className="total-power">
				<div className="container">
					<TotalPower totalPower={this.state.falconPower + this.state.saberPower}/>
					<div className="power-consumption">
					<figure className="millennium-falcon">
						<img
							src="./img/m_falcon.png"
							alt="Millennium Falcon"
							onClick={this.setFalconPower} />
						<figcaption className="falcon-power">{this.state.falconPower} kW</figcaption>
					</figure>
					<figure className="lightsaber">
						<img 
							src="./img/lightsaber.png"
							alt="Lightsaber"
							onClick={this.setSaberPower} />
						<figcaption className="lightsaber-power">{this.state.saberPower} kW</figcaption>
					</figure>
					</div>
				</div>
			</section>
		);
	}
}
export default Hero;