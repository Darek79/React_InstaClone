import axios from "axios";

const database = axios.create({
	baseURL: "https://swift-implement-218818.firebaseio.com/"
});

export default database;
