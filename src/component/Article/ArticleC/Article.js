import React from "react";
import "./Article.scss";

export default props => (
	<article className="Awrapper">
		<div className="username">
			<p>img</p>
			<p>{props.username}</p>
		</div>
		<div className="content">
			<p>img</p>
		</div>
		<div className="icons">
			<p>icon</p>
			<p>icon</p>
			<p>icon</p>
		</div>
		<div className="desc">
			<p>{props.desc}</p>
		</div>
	</article>
);
