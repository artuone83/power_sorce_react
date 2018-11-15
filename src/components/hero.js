import React, {Component} from 'react';
import TotalPower from './total_power';
import axios from 'axios';

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
					<figure className="millennium-falcon">
						<img
							src={require("../img/m_falcon.png")}
							alt="Millennium Falcon"
							className= {this.state.addClassFalcon ? "green-border" : "gray-border"}
							id={this.state.yellowFalcon ? "yellow-falcon-bg" : " "}
							onClick={this.setFalconPower} />
						<figcaption className="falcon-power">{this.state.falconPower} kW</figcaption>
					</figure>
					<figure className="lightsaber">
						<img 
							src={require("../img/lightsaber.png")}
							alt="Lightsaber"
							className= {this.state.addClassSaber ? "green-border" : "gray-border"}
							id={this.state.yellowSaber ? "yellow-saber-bg" : ''} 
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