import React from "react";
import "./Input.scss";

export default class AddPost extends React.Component {
	state = {
		username: "",
		desc: ""
	};

	onChangeUserName = e => {
		this.setState({ username: e.target.value });
	};
	onChangeDesc = e => {
		this.setState({ desc: e.target.value });
	};

	render() {
		return (
			<div className="Winput">
				<p>username:</p>
				<input
					type="text"
					placeholder="enter your username"
					onChange={e => this.onChangeUserName(e)}
				/>
				<p>enter a description:</p>
				<textarea rows="4" cols="30" onChange={e => this.onChangeDesc(e)} />
				<button onClick={this.onSub}>submit</button>
			</div>
		);
	}
}
