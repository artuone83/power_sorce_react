import React from 'react';
import Logo from './logo';
import Navi from './navi';
const PageHeader = (props) => {
	return (
		<header className='page-header'>
			<div className="container">
				<Logo />
				<Navi 
					activeStatus={props.active}
					activeIndex={props.activeHome}
				/>
			</div>
		</header>
	);
}
export default PageHeader;