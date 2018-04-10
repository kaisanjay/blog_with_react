import React from "react";
import "./Login.css"

class Login extends React.Component {
	state={
		username:'',
		password:''
	};
	Login= ()=> {
		console.log("Login works")
	}
	onChange= (e)=>{
		this.setState({[e.target.name] :e.target.value});
		console.log(this.state)


	}
	render() {
		return (
			 <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4 ex1" >
		          <div className="cell bodyPart">
		            <h2>Login page </h2>
		            <label>Username</label>
		            <input type="text" placeholder="Username" name="username" onChange={this.onChange}/>
		            <label>Password</label>
		            <input type="password" placeholder="password" name="password" onChange={this.onChange} />
		            <input type="submit" className="button" value="Login" onClick={this.Login}/>
		          </div>
		        </div>
		        
			);
	}
};

export default Login;