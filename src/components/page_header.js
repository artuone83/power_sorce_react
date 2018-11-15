import React from 'react';
import Logo from './logo';
import Navi from './navi';
const PageHeader = () => {
	return (
		<header className='page-header'>
			<div className="container">
				<Logo />
				<Navi />
			</div>
		</header>
	);
}
export default PageHeader;