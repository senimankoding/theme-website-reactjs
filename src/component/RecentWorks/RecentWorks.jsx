import React from 'react';

const RecentWorks = (props) => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 single-work">
			<div className="recent-work-wrap">
			    <img className="img-responsive" src={props.img} alt=""/>
			    <div className="overlay">
			        <div className="recent-work-inner">
			            <a className="preview" href={props.img} rel="prettyPhoto"><i className="fa fa-plus"></i></a>
			        </div>
			    </div>
			</div>
		</div>
	)
}

export default RecentWorks;