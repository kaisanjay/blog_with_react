import React from "react";
import "./Login.css"

class Login extends React.Component {
	render() {
		return (
			 <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4 ex1" >
		          <div className="cell bodyPart">
		            <h2>Login page </h2>
		            <label>Username</label>
		            <input type="text" placeholder="Username" name="username" />
		            <label>Password</label>
		            <input type="password" placeholder="password" name="password" />
		          </div>
		        </div>
		        
			);
	}
};

export default Login;