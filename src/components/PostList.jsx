import React, { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (post) => {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  };

  //generate key prop
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className="flex flex-row">
          {posts.map((post, index) => (
            <Post key={generateKey} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div>
          <p className="text-2xl text-center">No posts found 😒</p>
          <p className="text-2xl text-center">Start adding some! ✨</p>
        </div>
      )}
    </>
  );
};

export default PostList;
