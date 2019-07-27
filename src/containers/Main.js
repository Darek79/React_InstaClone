import React from "react";
import Posts from "../components/Posts/Posts";
import SelectedPost from "../components/SelectedPost/SelectedPost";
import axios from "axios";
import uuid from "uuid/v4";

import "./PostWrapper.css";

class Main extends React.Component {
	state = {
		loadedPosts: [],
		selectedPost: null,
		err: false
	};

	onClickId = id => {
		const selPost = { ...this.state.loadedPosts[id - 1] };
		this.setState(() => {
			return {
				selectedPost: selPost
			};
		});
	};

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => {
				const json = res.data.slice(0, 4);
				this.setState(() => {
					return {
						loadedPosts: json
					};
				});
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
	componentDidUpdate() {
		console.log("up");
	}

	render() {
		const NPosts = this.state.loadedPosts.map(({ id, title, body }) => {
			return (
				<Posts
					click={() => this.onClickId(id)}
					key={uuid()}
					id={id}
					title={title}
					body={body}
				/>
			);
		});
		return !this.state.err ? (
			<div>
				<section className="PostWrapper">{NPosts}</section>
				{!this.state.selectedPost ? (
					<h2>please choose a post</h2>
				) : (
					<SelectedPost {...this.state.selectedPost} />
				)}
			</div>
		) : (
			<h2>sorry a error occured</h2>
		);
	}
}

export default Main;
