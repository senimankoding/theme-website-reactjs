import React, {Component} from 'react';
import Features from '../../../component/Features/Features';
import ServicesSection from '../../../component/ServicesSection/ServicesSection';
import RecentWorks from '../../../component/RecentWorks/RecentWorks';


class Home extends Component {
	render(){
		return(
			<div className="body homepage">

			    <div id="main-slider" className="no-margin">
			        <div className="carousel slide">
			            <ol className="carousel-indicators">
			                <li data-target="#main-slider" data-slide-to="0" className="active"></li>
			                <li data-target="#main-slider" data-slide-to="1"></li>
			            </ol>
			            <div className="carousel-inner">

			                <div className="item active slider-img-1">
			                    <div className="container">
			                        <div className="row">
			                            <div className="col-md-7">
			                                <div className="carousel-content">
			                                    <h1 className="animation animated-item-1">Help Finding Information Online</h1>
			                                    <div className="animation animated-item-2">
			                                        Every new computer that’s brought home from the store has an operating system installed onto it.
			                                    </div>
			                                    <a className="btn-slide animation animated-item-3" href="#">Learn More</a>
			                                    <a className="btn-slide white animation animated-item-3" href="#">Get Started</a>
			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>

			                <div className="item slider-img-2">
			                    <div className="container">
			                        <div className="row">
			                            <div className="col-md-7">
			                                <div className="carousel-content">
			                                    <h1 className="animation animated-item-1">Help Finding Information Online</h1>
			                                    <div className="animation animated-item-2">
			                                        Every new computer that’s brought home from the store has an operating system installed onto it.
			                                    </div>
			                                    <a className="btn-slide white animation animated-item-3" href="#">Learn More</a>
			                                    <a className="btn-slide animation animated-item-3" href="#">Get Started</a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <a className="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
			            <i className="fa fa-chevron-left"></i>
			        </a>
			        <a className="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
			            <i className="fa fa-chevron-right"></i>
			        </a>
			    </div>

			    <section id="feature">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Features</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam
			                </p>
			            </div>

			            <div className="row">
			                <Features
			                	icon="fa fa-rocket"
			                	title="Fast"
			                	desc="Having a baby can be a nerve wracking experience for new"
			                />
			                <Features
			                	icon="fa fa-check"
			                	title="Easy"
			                	desc="If you are looking for a new way to promote your business that"
			                />
			                <Features
			                	icon="fa fa-bullhorn"
			                	title="Cheap"
			                	desc="Okay, you’ve decided you want to make money with Affiliate"
			                />
			                <Features
			                	icon="fa fa-arrows"
			                	title="Editable"
			                	desc="A Pocket PC is a handheld computer, which features many"
			                />
			            </div>
			        </div>
			    </section>

			    <section id="recent-works">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Recent Works</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			            <div className="row">
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-1.png"
			                />
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png"
			                />
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-3.png"
			                />
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-4.png"
			                />
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-5.png"
			                />
			                <RecentWorks
			                	img="https://demo.themeum.com/html/corlate/images/portfolio/item-6.png"
			                />
			            </div>

			            <div className="clearfix text-center">
			                <a href="#" className="btn btn-primary btn-top">Show More</a>
			            </div>
			        </div>
			    </section>

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

			    <section id="middle" className="skill-area">
			        <div className="container">
			            <div className="row">
			                <div className="col-sm-12 fadeInDown">
			                    <div className="skill">
			                        <h2>Our Skills</h2>
			                        <p>All users on MySpace will know that there are millions of people out there. Every  day besides so many people joining this community.</p>
			                    </div>
			                </div>


			                <div className="col-sm-6">
			                    <div className="progress-wrap">
			                        <h3>Graphic Design</h3>
			                        <div className="progress">
			                            <div className="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
			                                <span className="bar-width">85%</span>
			                            </div>

			                        </div>
			                    </div>

			                    <div className="progress-wrap">
			                        <h3>HTML</h3>
			                        <div className="progress">
			                            <div className="progress-bar color2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
			                                <span className="bar-width">95%</span>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="col-sm-6">
			                    <div className="progress-wrap">
			                        <h3>CSS</h3>
			                        <div className="progress">
			                            <div className="progress-bar color3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
			                                <span className="bar-width">80%</span>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="progress-wrap">
			                        <h3>Wordpress</h3>
			                        <div className="progress">
			                            <div className="progress-bar color4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
			                                <span className="bar-width">90%</span>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			            </div>

			        </div>
			    </section>

			    <section id="content">
			        <div className="container">
			            <div className="row">
			                <div className="col-xs-12 col-sm-10 col-sm-offset-1 fadeInDown">
			                    <div className="tab-wrap">
			                        <div className="media">
			                            <div className="parrent pull-left">
			                                <ul className="nav nav-tabs nav-stacked">
			                                    <li className=""><a href="#tab1" data-toggle="tab" className="analistic-01">Responsive Web Design</a></li>
			                                    <li className="active"><a href="#tab2" data-toggle="tab" className="analistic-02">Premium Plugin Included</a></li>
			                                    <li className=""><a href="#tab3" data-toggle="tab" className="tehnical">Predefine Layout</a></li>
			                                    <li className=""><a href="#tab4" data-toggle="tab" className="tehnical">Our Philosopy</a></li>
			                                    <li className=""><a href="#tab5" data-toggle="tab" className="tehnical">What We Do?</a></li>
			                                </ul>
			                            </div>

			                            <div className="parrent media-body">
			                                <div className="tab-content">
			                                    <div className="tab-pane fade" id="tab1">
			                                        <div className="media">
			                                            <div className="pull-left">
			                                                <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/tab2.png" alt=""/>
			                                            </div>
			                                            <div className="media-body">
			                                                <h2>Adipisicing elit</h2>
			                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use.</p>
			                                            </div>
			                                        </div>
			                                    </div>

			                                    <div className="tab-pane fade active in text-right" id="tab2">
			                                        <div className="video-box">
			                                            <img src="https://demo.themeum.com/html/corlate/images/tab-video-bg.png" alt="video"/>
			                                            <a className="video-icon" href="http://www.youtube.com/watch?v=cH6kxtzovew" rel="prettyPhoto"><i className="fa fa-play"></i></a>
			                                        </div>
			                                    </div>

			                                    <div className="tab-pane fade" id="tab3">
			                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
			                                    </div>

			                                    <div className="tab-pane fade" id="tab4">
			                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
			                                    </div>

			                                    <div className="tab-pane fade" id="tab5">
			                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,</p>
			                                    </div>
			                                </div>
			                   
			                            </div>
			                
			                        </div>
			                
			                    </div>
			          
			                </div>
			

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


export default Home;

