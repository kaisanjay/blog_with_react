import React from "react";
import "./MobileHeader.css"

class MobileHeader extends React.Component {
	render() {
		return (
			<div className="title-bar hide-for-large">
	          <div className="title-bar-left">
	            <button className="menu-icon" type="button" data-toggle="my-info"></button>
	            <span className="title-bar-title">{this.props.name}</span>
	          </div>
	        </div>
        
			);
	}
};

export default MobileHeader;