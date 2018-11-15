import React from 'react';
const Navi = (props) => {
  return (
    <nav className="nav">
				<ul>
					<li><a href="index.html" className={props.activeIndex}>HOME</a></li>
					<li><a href="status.html" className={props.activeStatus}>STATUS</a></li>
				</ul>
			</nav>  
  );
}
export default Navi;