import React, { Fragment } from "react";
import "./sPost.css";

const selectedPost = props => (
	<div className="sPost">
		<p>{props.id}</p>
		<p>{props.title}</p>
		<p>{props.body}</p>
		<p>{props.index}</p>
		<button onClick={() => props.getId(props.index)}>send to server</button>
	</div>
);

export default selectedPost;

{
	/* <p>{props.title.substr(0, 10)}</p>
<p>{props.body.substr(0, 50)}</p> */
}
