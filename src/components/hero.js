import React, {Component} from 'react';
import TotalPower from './total_power';
import axios from 'axios';
import MillenniumFalcon from './millennium-_falcon';
import LightSaber from './light_saber';

const falconURL = 'https://challenge.codetain.com/api/v1/charging_status?priority=falcon';
const saberURL = 'https://challenge.codetain.com/api/v1/charging_status?priority=lightsaber';
class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiURL: 'https://challenge.codetain.com/api/v1/charging_status',					
			falconPower: 0,
			saberPower: 0,
			addClassFalcon: false,
			addClassSaber: false,
			yellowFalcon: false,
			yellowSaber: false
		}
		this.setFalconPower = this.setFalconPower.bind(this);
		this.setSaberPower = this.setSaberPower.bind(this);
		this.getPowerVal = this.getPowerVal.bind(this)
	}
	getPowerVal() {
		axios.get(this.state.apiURL)
			.then(res => {
				this.setState({
					falconPower: res.data.charging_status.falcon,
					saberPower: res.data.charging_status.lightsaber					
				});
				this.state.falconPower != 0 ? this.setState({addClassFalcon: true}) : this.setState({addClassFalcon: false});
				this.state.saberPower != 0 ? this.setState({addClassSaber: true}) : this.setState({addClassSaber: false});
			})
	}
	componentDidMount() {		
			setInterval(this.getPowerVal, 3000);
		}
	setFalconPower() {
		this.setState({
			falconPower: Math.floor(Math.random() * 8),
			apiURL: falconURL,
			addClassFalcon: !this.state.addClassFalcon,
			yellowFalcon: !this.state.yellowFalcon,
			yellowSaber: false				
		});					
	}
	setSaberPower() {
		this.setState({
			saberPower: Math.floor(Math.random() * 8),
			apiURL: saberURL,
			addClassSaber: !this.state.addClassSaber,
			yellowSaber: !this.state.yellowSaber,
			yellowFalcon: false					
		});		
	}
	render() {
		return (
			<section className="total-power">
				<div className="container">
					<TotalPower totalPower={this.state.falconPower + this.state.saberPower}/>
					<div className="power-consumption">					
					<MillenniumFalcon
						toggleClass={this.state.addClassFalcon ? "green-border" : "gray-border"}
						toggleId={this.state.yellowFalcon ? "yellow-falcon-bg" : " "}
						handleSetFalconPower={this.setFalconPower}
						falconPower={this.state.falconPower}
					/>					
					<LightSaber
						toggleClass={this.state.addClassSaber ? "green-border" : "gray-border"}
						toggleId={this.state.yellowSaber ? "yellow-saber-bg" : ''}
						handleSetSaberPower={this.setSaberPower}
						saberPower={this.state.saberPower}
					/>
					</div>
				</div>
			</section>
		);
	}
}
export default Hero;