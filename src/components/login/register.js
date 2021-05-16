import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header"> Register </div>
				<div className="content">
					<div className="image">
					<img src={loginImg} alt="register icon" />
					</div>

					<div className="form">
						<div className="form-group">
						<label htmlfor="username">Username</label>
						<input type="text" name="usermane" placeholder="username" />
						</div>

						<div className="form-group">
						<label htmlfor="email">Email</label>
						<input type="email" name="email" placeholder="email" />
						</div>

						<div className="form-group">
						<label htmlfor="password">Password</label>
						<input type="password" name="password" placeholder="password" />
						</div>
					</div>

				</div>
				<div className="footer">
					<button type="button" className="btn">Register</button>
				</div>

			</div>
		);
	}
}
