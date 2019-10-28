import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../component/Footer/Footer';
import TopBar from '../../component/TopBar/TopBar';
import Home from '../Page/Home/Home';
import About from '../Page/About/About';
import Services from '../Page/Services/Services';
import Portfolio from '../Page/Portfolio/Portfolio';
import Contact from '../Page/Contact/Contact';


class Index extends Component {
	render(){
		return(
			<Router>
				<div>
					<header id="header">
				        <TopBar/>

				        <nav className="navbar navbar-inverse" role="banner">
				            <div className="container">
				                <div className="navbar-header">
				                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				                        <span className="sr-only">Toggle navigation</span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                    </button>
				                   
				                    <Link to="/" className="navbar-brand"><img src="https://demo.themeum.com/html/corlate/images/logo.png" alt="logo"/></Link>
				                </div>

				                <div className="collapse navbar-collapse navbar-right">
				                    <ul className="nav navbar-nav">
				                        <li className="home-nav active"><Link to="/">Home</Link></li>
				                        <li className=""><Link to="/about">About Us</Link></li>
				                        <li className=""><Link to="/services">Services</Link></li>
				                        <li className=""><Link to="/portfolio">Portfolio</Link></li>
				                        <li className=""><Link to="/contact">Contact</Link></li>
				                    </ul>
				                </div>
				            </div>
				        </nav>
	    			</header>

					<Route path="/" exact component={Home} />
					<Route path="/about/" component={About} />
					<Route path="/services/" component={Services} />
					<Route path="/portfolio/" component={Portfolio} />
					<Route path="/contact/" component={Contact} />

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;