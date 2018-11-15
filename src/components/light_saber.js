import React from 'react';

const LightSaber = (props) => {
	return (
		<figure className="lightsaber">
			<img
				src={require("../img/lightsaber.png")}
				alt="Lightsaber"
				className= {props.toggleClass}
				id={props.toggleId}
				onClick={props.handleSetSaberPower} />
			<figcaption className="falcon-power">{props.saberPower} kW</figcaption>
		</figure>
	);
}
export default LightSaber;