import React from "react";
import Posts from "../components/Posts/Posts";
import SelectedPost from "../components/SelectedPost/SelectedPost";
import FavModal from "../components/Modal/Modal";
import getPhotos from "../getPhotos";
import getFavorites from "../getFavorites";
import database from "../database";
import uuid from "uuid/v4";

import "./PostWrapper.css";

class Main extends React.Component {
	state = {
		loadedPosts: [],
		selectedPost: null,
		err: false,
		favs: 0,
		show: false
	};

	onClickId = (e, id, i) => {
		console.log(i);
		const selPost = { ...this.state.loadedPosts[id - 1], index: i };
		this.setState(() => {
			return {
				selectedPost: selPost
			};
		});
		if (e.target.getAttribute("data-set") === "remove") {
			const filtered = this.state.loadedPosts.filter((val, ind) => {
				return i !== ind;
			});
			this.setState(() => {
				return {
					loadedPosts: filtered,
					selectedPost: null
				};
			});
		}
		if (e.target.getAttribute("data-set") === "favorites") {
			const fav = this.state.loadedPosts[i];
			database
				.post("/favorites.json", fav)
				.then(res => console.log(res))
				.catch(err => console.log(err));
			this.setState(state => {
				return {
					favs: state.favs + 1
				};
			});
		}
	};

	onSendPost = i => {
		console.log(i);
		const selPost = [...this.state.loadedPosts];
		database
			.post("/selectedPost.json", selPost[i])
			.then(res => console.log(res))
			.catch(err => console.log(err));
		console.log(selPost[i]);
	};

	showModal = () => {
		const sFavs = this.state.show;
		this.setState({ show: !sFavs });
	};

	componentDidMount() {
		getPhotos()
			.then(res => {
				const json = res.data.slice(0, 9);
				this.setState(() => {
					return {
						loadedPosts: json
					};
				});
				console.log("pull");
			})
			.catch(err => {
				console.log("here");
				if (err) {
					this.setState(() => {
						return { err: true };
					});
				}
			});
	}
	componentDidUpdate() {}

	render() {
		console.log(!!this.state.favs);

		const NPosts = this.state.loadedPosts.map(
			({ id, title, thumbnailUrl }, i) => {
				return (
					<Posts
						click={e => this.onClickId(e, id, i)}
						key={uuid()}
						id={id}
						title={title}
						thumbnailUrl={thumbnailUrl}
					/>
				);
			}
		);
		return !this.state.err ? (
			<div>
				<div className="showF">
					<button onClick={this.showModal} disabled={!this.state.favs}>
						show favorites
					</button>
					{!this.state.favs ? null : <span>{this.state.favs}</span>}
				</div>

				<section className="PostWrapper">{NPosts}</section>
				{!this.state.selectedPost ? (
					<h2>please choose a post</h2>
				) : (
					<SelectedPost getId={this.onSendPost} {...this.state.selectedPost} />
				)}
				<FavModal show={this.state.show} />
			</div>
		) : (
			<h2>sorry a error occured</h2>
		);
	}
}

export default Main;
