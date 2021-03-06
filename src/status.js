import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/status_style.css';
import PageHeader from './components/page_header';
import Hero from './components/hero';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<div>
				<PageHeader active='active'/>
				<Hero />
				<Footer/>
			</div>
		);
	}
}
ReactDOM.render(
	<App />,
	document.querySelector('.app')
);