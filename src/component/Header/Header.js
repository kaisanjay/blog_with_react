import React from "react";
import "./Header.css"

class Header extends React.Component {
	render() {
		return (
			
		        <div class="callout primary">
		          <article class="grid-container">
		            <div class="">
		              <h1>{this.props.name} Project</h1></div>
		          </article>
		        </div>
			);
	}
};

export default Header;