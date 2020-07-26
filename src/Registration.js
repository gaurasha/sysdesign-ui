// App.js
import React, { Component } from "react";
import axios from "axios";
// import ReactDOM from 'react-dom';
import "./App.css";
// import { connect, sendMsg } from "./api";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			password_confirmation: "",
			RegistrationErrors: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		console.log("form submitted");
		console.log(this.state);
		axios.post("http://localhost:8080/twirp/twirp.example.haberdasher.Haberdasher/AddUser",{
			user: {
				email: this.state.email,
				password: this.state.password,
				password_confirmation: this.state.password_confirmation
			}
		},
		{withCredentials: true}
		)
		.then( response =>{
			console.log("registration res",response);
		})
		.catch(error=>{
			console.log("error",error);
		})
		event.preventDefault();
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log("handle change");
	}

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
				<br /><br />
					<input 
						type="email"
						className="inputStyle" 
						name="email" 
						placeholder="Email" 
						value={this.state.email} 
						onChange={this.handleChange} 
						required 
					/><br /><br />
					<input 
						type="password"
						className="inputStyle" 
						name="password" 
						placeholder="Password" 
						value={this.state.password} 
						onChange={this.handleChange} 
						required 
					/><br /><br />
					<input 
						type="password" 
						className="inputStyle"
						name="password_confirmation" 
						placeholder="Confirm Password" 
						value={this.state.password_confirmation} 
						onChange={this.handleChange} 
						required 
					/><br /><br />
					<button type="submit">Register</button>
					<br /><br />
				</form>
			</div>
		);
	}
}

export default App;