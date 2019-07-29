import React, { Fragment } from "react";
import Main from "./containers/Main";
import getPhotos from "./getPhotos";
import "./styles.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
}

export default App;
