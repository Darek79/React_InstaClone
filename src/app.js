import React, { Fragment } from "react";
import Main from "./containers/Main";
import getPhotos from "./getPhotos";
import "./styles.css";

class App extends React.Component {
	state = {
		nPost: []
	};

	componentDidMount() {
		getPhotos().then(res => {
			const picsJson = res.data.slice(0, 5);
			console.log(picsJson);
		});
	}

	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
}

export default App;
