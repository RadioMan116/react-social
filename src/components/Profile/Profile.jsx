import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				updateNewPost={props.updateNewPost}
			/>
		</div>
	)
}

export default Profile;