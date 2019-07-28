import axios from "axios";

const getPhotos = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/photos"
});

export default getPhotos;
