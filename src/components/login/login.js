import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header"> Login </div>
				<div className="content">
					<div className="image">
					<img src={loginImg} alt="login icon" />
					</div>

					<div className="form">
						<div className="form-group">
						<label htmlfor="username">Username</label>
						<input type="text" name="usermane" placeholder="username" />
						
						</div>

						<div className="form-group">
						<label htmlfor="password">Password</label>
						<input type="password" name="password" placeholder="password" />
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" className="btn">Login</button>
				</div>

			</div>
		);
	}
}
