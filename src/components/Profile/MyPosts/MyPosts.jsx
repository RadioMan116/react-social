import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} avatar={p.avatar} />)
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		console.log(text)
	}
	return (
		<div className={s.postsBlocks}>
			<h3> My posts</h3>
			<div>
				<textarea ref={newPostElement}></textarea>
				<div><button onClick={addPost}>Add post</button></div>

			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)

}

export default MyPosts;