import React from 'react';

const TotalPower = (props) => {
	return (
		<h1>TOTAL POWER:<span className="total-power-value">{props.totalPower} kW</span></h1>
	);
}
export default TotalPower;