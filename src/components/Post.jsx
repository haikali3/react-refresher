import React from 'react';

const Post = ({ author, age }) => {
  return (
    <li className="p-4 m-4 bg-blue-800 rounded-lg hover:bg-blue-500">
      <p>Chosen Author: {author} </p>
      <p>Chosen age: {age} </p>
    </li>
  );
};

export default Post;
