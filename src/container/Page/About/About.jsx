import React, {Component} from 'react';
import Team from '../../../component/Team/Team';

class About extends Component {
	render(){
		return(
			<div className="body">
				<div className="page-title">
			        <h1>About us</h1>
			    </div>

			    <section id="about-us">
			        <div className="container">
			            <div className="row">
			                <div className="col-md-7">
			                    <div className="about-img">
			                        <img src="https://demo.themeum.com/html/corlate/images/about-img.png" alt=""/>
			                    </div>
			                </div>
			                <div className="col-md-5">
			                    <div className="about-content">
			                        <h2>Who we are</h2>
			                        <p>Photographs are a way of preserving a moment in our lives for the rest of our lives. Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. It surely seems old fashioned to talk about 35mm film and non-digital cameras in today’s day and age.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>


			    <section id="middle" className="skill-area">
			        <div className="container">
			            <div className="row">
			                <div className="col-sm-12 fadeInDown">
			                    <div className="skill">
			                        <h2>Our Skills</h2>
			                        <p>All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community.</p>
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

    
			    <section id="team-area">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Team</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>
			            <div className="row">
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team1.png"
			                	name="Jeffery Poole"
			                	job="UI/UX Designer"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team2.png"
			                	name="Isabelle Dean"
			                	job="Designer"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team3.png"
			                	name="Mike Kennedy"
			                	job="Digital Marketing"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team4.png"
			                	name="Edwin Gross"
			                	job="BackEnd Developer"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team5.png"
			                	name="Mable Schwartz"
			                	job="FrontEnd Developer"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="https://demo.themeum.com/html/corlate/images/team6.png"
			                	name="Adele Washington"
			                	job="Web Designer"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default About;