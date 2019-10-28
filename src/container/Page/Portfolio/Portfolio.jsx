import React, {Component} from 'react'

class Portfolio extends Component {
	render(){
		return(
			<div className="body">
				<div className="page-title">
			        <h1>Portfolio</h1>
			    </div>


			    <section id="portfolio">
			        <div className="container">
			            <div className="center">
			                <h2>Recent work</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>


			            <ul className="portfolio-filter text-center">
			                <li><a className="btn btn-default active" href="#" data-filter="*">All Works</a></li>
			                <li><a className="btn btn-default" href="#" data-filter=".bootstrap">Creative</a></li>
			                <li><a className="btn btn-default" href="#" data-filter=".html">Photography</a></li>
			                <li><a className="btn btn-default" href="#" data-filter=".wordpress">Web Development</a></li>
			            </ul>

			            <div className="row">
			                <div className="portfolio-items">
			                    <div className="portfolio-item apps col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-1.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-1.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item joomla bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item bootstrap wordpress col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-3.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-3.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item joomla wordpress apps col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-4.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-4.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item joomla html bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-5.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-5.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item wordpress html apps col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-1.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="images/portfolio/item-1.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item joomla html bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-6.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-6.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="portfolio-item wordpress html apps col-xs-12 col-sm-4 col-md-3 single-work">
			                        <div className="recent-work-wrap">
			                            <img className="img-responsive" src="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png" alt=""/>
			                            <div className="overlay">
			                                <div className="recent-work-inner">
			                                    <a className="preview" href="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png" rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default Portfolio;