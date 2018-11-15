import React from 'react';

const MilleniumFalcon = (props) => {
	return (
		<figure className="millennium-falcon">
			<img
				src={require("../img/m_falcon.png")}
				alt="Millennium Falcon"
				className= {props.toggleClass}
				id={props.toggleId}
				onClick={props.handleSetFalconPower} />
			<figcaption className="falcon-power">{props.falconPower} kW</figcaption>
		</figure>
	);
}
export default MilleniumFalcon;