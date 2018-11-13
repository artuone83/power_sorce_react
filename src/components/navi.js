import React from 'react';
const Navi = () => {
  return (
    <nav className="nav">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="status.html" className="active">STATUS</a></li>
				</ul>
			</nav>  
  );
}
export default Navi;