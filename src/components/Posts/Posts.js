import React, { Fragment } from "react";
import "./Posts.css";

const posts = props => {
	const style = {
		backgroundImage: `url(${props.thumbnailUrl})`,
		width: "50px",
		height: "50px",
		border: "1px solid red"
	};

	return (
		<Fragment>
			<div className="Posts" onClick={props.click}>
				<div className="backImgWr">
					<div style={style} className="backImg" />
					<p>{props.title.substr(5, 10)}</p>
				</div>

				<p>title</p>
				<p>{props.title.substr(0, 50)}</p>
				<div className="btnWra">
					<button data-set="favorites">add to favorites</button>
					<button data-set="remove">remove</button>
				</div>
			</div>
		</Fragment>
	);
};

export default posts;
