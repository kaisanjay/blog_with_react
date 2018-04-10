import React from "react";
import "./Welcome.css"

class Welcome extends React.Component {
	render() {
		return (
			
		        <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
		          <div class="cell">
		            <h2>Welcome page </h2>
		            <a href="login" className="button">Login</a>
		            <a href="signup" className="button success">Signup</a>
		          </div>
		        </div>

			);
	}
};

export default Welcome;