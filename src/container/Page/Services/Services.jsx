import React, {Component} from 'react';
import ServicesSection from '../../../component/ServicesSection/ServicesSection';

class Services extends Component {
	render(){
		return(
			<div className="body">
				<div className="page-title">
			        <h1>Services</h1>
			    </div>

			    <section id="services" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Service</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			            <div className="row">
			            	<ServicesSection
			                	title="UI/UX Design"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/ux.svg"
			                />
			                <ServicesSection
			                	title="Web Design"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/web.svg"
			                />
			                <ServicesSection
			                	title="Motion Graphics"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/motion.svg"
			                />

			                <ServicesSection
			                	title="Mobile UI/UX"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/mobile-ui.svg"
			                />
			                <ServicesSection
			                	title="Web Applications"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/web-app.svg"
			                />
			                <ServicesSection
			                	title="SEO Marketing"
			                	desc="Hydroderm is the highly desired anti-aging cream on"
			                	img="https://demo.themeum.com/html/corlate/images/services/mobile-ui.svg"
			                />
			            </div>
			        </div>
			    </section>

			    <section id="partner">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Partners</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			            <div className="partners">
			                <ul>
			                    <li>
			                        <a href="#"><img className="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="https://demo.themeum.com/html/corlate/images/partners/brand-1.png" alt="" /></a>
			                    </li>
			                    <li>
			                        <a href="#"><img className="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" src="https://demo.themeum.com/html/corlate/images/partners/brand-2.png" alt="" /></a>
			                    </li>
			                    <li>
			                        <a href="#"><img className="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms" src="https://demo.themeum.com/html/corlate/images/partners/brand-3.png" alt="" /></a>
			                    </li>
			                    <li>
			                        <a href="#"><img className="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms" src="https://demo.themeum.com/html/corlate/images/partners/brand-4.png" alt="" /></a>
			                    </li>
			                    <li>
			                        <a href="#"><img className="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="1500ms" src="https://demo.themeum.com/html/corlate/images/partners/brand-5.png" alt="" /></a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default Services;