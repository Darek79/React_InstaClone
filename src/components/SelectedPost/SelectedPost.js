import React from "react";

const selectedPost = props => (
	<div>
		<p>{props.id}</p>
		<p>{props.title}</p>
		<p>{props.body}</p>
	</div>
);

export default selectedPost;

{
	/* <p>{props.title.substr(0, 10)}</p>
<p>{props.body.substr(0, 50)}</p> */
}
