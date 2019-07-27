import React, { Fragment } from "react";
import Main from "./containers/Main";
import "./styles.css";

class App extends React.Component {
	state = {
		nPost: []
	};

	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
}

export default App;
