import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='hello Renat' likeCount= '20' avatar='https://sun9-41.userapi.com/impf/c636325/v636325678/53370/s_y1_wRt4BY.jpg?size=200x0&quality=90&sign=13877ea449cd1246872f6b63339dbaf9&ava=1'/>
        <Post message='hello Matur Girl' likeCount='13' avatar='https://sun9-7.userapi.com/impf/c836634/v836634997/6b977/YqmIoFRZM5s.jpg?size=200x0&quality=90&sign=5e2bfa2f2fd4b2057b812d1ee60a1570&ava=1'/>
      </div>
    </div>
  )

}

export default MyPosts;