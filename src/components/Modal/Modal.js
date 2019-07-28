import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import getFavorites from "../../getFavorites";

const FavModal = props => {
	const [mstate, setStateModal] = useState({
		favorites: []
	});

	useEffect(() => {
		console.log("fired");
		getFavorites().then(res => {
			setStateModal(() => {
				return {
					favorites: [...mstate.favorites, ...res]
				};
			});
		});
	}, [mstate]);

	return (
		<Modal isOpen={!!props.show} contentLabel="Fav Posts" ariaHideApp={false}>
			{mstate.favorites.map(({ title, thumbnailUrl }) => {
				console.log(mstate.favorites);
				return (
					<div>
						<img src={thumbnailUrl} alt="profilePicture" />
						<p>{title}</p>
					</div>
				);
			})}
		</Modal>
	);
};

export default FavModal;
