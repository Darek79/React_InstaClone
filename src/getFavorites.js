import axios from "axios";

const getFavorites = axios.create({
	baseURL: "https://swift-implement-218818.firebaseio.com/favorites"
});

export default getFavorites;
