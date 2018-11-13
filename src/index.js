import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/status_style.scss';
import img from './img/power2.jpg';
import PageHeader from './components/page_header';
import Hero from './components/hero';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
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