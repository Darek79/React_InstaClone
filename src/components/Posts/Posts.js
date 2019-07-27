import React from "react";
import "./Posts.css";

const posts = props => (
	<div className="Posts" onClick={props.click}>
		<p>{props.id}</p>
		<p>{props.title.substr(0, 10)}</p>
		<p>{props.body.substr(0, 50)}</p>
	</div>
);

export default posts;
