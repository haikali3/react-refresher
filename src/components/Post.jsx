import React from 'react';

const Post = ({ author, body }) => {
  return (
    <li className="p-4 m-4 bg-blue-800 rounded-lg hover:bg-blue-500">
      <p>Author: {author} </p>
      <p>Book: {body} </p>
    </li>
  );
};

export default Post;
