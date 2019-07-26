import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Article from "./component/Article/ArticleC/Article";
import AWrapper from "./component/Article/ArticleWrapper";
import AddPost from "./component/AddPost/Input";

import "./styles.css";

const App = () => {
	return (
		<div className="App">
			<AWrapper />

			<AddPost />
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
