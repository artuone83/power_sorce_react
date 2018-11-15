import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/style.css';
import PageHeader from './components/page_header';
import PowerSource from './components/power_source';
import TextSection from './components/text_section';
import Footer from './components/footer';

class Index_App extends Component {
	render() {
		return (
			<div>
				<PageHeader />
				<PowerSource />
				<TextSection />
				<Footer />
			</div>
		);
	}
}
ReactDOM.render(
	<Index_App />,
	document.querySelector('.index-app')
);