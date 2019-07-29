import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const ShowModal = props => {
	const [showData, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://swift-implement-218818.firebaseio.com/favorites.json")
			.then(res => {
				const arr = [];
				console.log(res);
				const data = res.data;
				for (const key in data) {
					arr.push({
						id: data[key].id,
						title: data[key].title,
						pic: data[key].thumbnailUrl
					});
				}
				const sliced = arr.slice(0, 5);
				setData(sliced);
			});
	}, []);

	return (
		<Modal
			isOpen={props.open}
			onRequestClose={props.close}
			contentLabel="Favorites"
		>
			<ul>
				{showData.map(val => (
					<li key={val.id}>{val.title}</li>
				))}
			</ul>

			<button onClick={props.close}>close me</button>
		</Modal>
	);
};

Modal.setAppElement("#root");

export default ShowModal;
