import React from 'react';

const ServicesSection = (props) => {
	return (
		<div className="col-sm-6 col-md-4">
			<div className="media services-wrap fadeInDown">
			    <div className="pull-left">
			        <img className="img-responsive" src={props.img} alt=""/>
			    </div>
			    <div className="media-body">
			        <h3 className="media-heading">{props.title}</h3>
			        <p>{props.desc}</p>
			    </div>
			</div>
		</div>
	)
}

export default ServicesSection;