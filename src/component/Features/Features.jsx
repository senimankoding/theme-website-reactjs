import React from 'react';

const Features = (props) => {
	return(
		<div className="features">
			<div className="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
			    <div className="feature-wrap">
			        <div className="icon">
			            <i className={props.icon}></i>
			        </div>
			        <h2>{props.title}</h2>
			        <p>{props.desc}</p>
			    </div>
			</div>
		</div>
	)
}


Features.defaultProps = {
	icon: '00.00',
	title: 'Title Here',
	desc: 'Desc Here'
}


export default Features;