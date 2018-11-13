import React, {Component} from 'react';
import TotalPower from './total_power';
class Hero extends Component {
  render() {
    return (
      <section className="total-power">
        <div className="container">
          <TotalPower totalPower='0'/>
          <div className="power-consumption">
          <figure className="millennium-falcon">
            <img src="./img/m_falcon.png" alt="Millennium Falcon" />
            <figcaption className="falcon-power">0 kW</figcaption>
          </figure>
          <figure className="lightsaber">
            <img src="./img/lightsaber.png" alt="Lightsaber" />
            <figcaption className="lightsaber-power">0 kW</figcaption>
          </figure>
          </div>
        </div>
      </section>
    );
  }
}
export default Hero;