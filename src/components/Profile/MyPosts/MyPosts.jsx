import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let posts = [
		{ id: 1, message: "Привет Ренат", likeCount: 20, avatar: 'https://sun9-41.userapi.com/impf/c636325/v636325678/53370/s_y1_wRt4BY.jpg?size=200x0&quality=90&sign=13877ea449cd1246872f6b63339dbaf9&ava=1' },
		{ id: 2, message: "Привет Матур кыз", likeCount: 13, avatar: 'https://sun9-7.userapi.com/impf/c836634/v836634997/6b977/YqmIoFRZM5s.jpg?size=200x0&quality=90&sign=5e2bfa2f2fd4b2057b812d1ee60a1570&ava=1' }
	];
	let postsElement = posts.map(p => <Post message={p.message} likeCount={p.likeCount} avatar={p.avatar} />)
	return (
		<div className={s.postsBlocks}>
			<h3> My posts</h3>
			<div>
				<textarea></textarea>
				<div><button>Add post</button></div>

			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)

}

export default MyPosts;