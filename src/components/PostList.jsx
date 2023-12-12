import React, { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className="flex flex-row">
        <div>
          <Post author="Haikal" age={13} />
        </div>
      </ul>
    </>
  );
};

export default PostList;
