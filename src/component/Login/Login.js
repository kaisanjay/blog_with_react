import React from "react";
import "./Login.css"

class Login extends React.Component {
	render() {
		return (
			 <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
		          <div class="cell">
		            <h2>Login page </h2>
		            <label>Username</label>
		            <input type="text" placeholder="Username" name="username" />
		          </div>
		        </div>
		        
			);
	}
};

export default Login;