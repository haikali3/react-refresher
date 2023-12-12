import { useState } from 'react';

const NewPost = ({ onCancel }) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onCancel();
  };

  return (
    <form action="" className="" onSubmit={submitHandler}>
      <div className="flex flex-col pb-4">
        <label className="font-bold">Author</label>
        <input
          type="text"
          id="name"
          className="bg-blue-900 rounded"
          onChange={authorChangeHandler}
        />
      </div>
      <div className="flex flex-col pb-4">
        <label htmlFor="" className="font-bold">
          Text
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="bg-blue-900 rounded"
          onChange={bodyChangeHandler}
        ></textarea>
        <div className="pt-4">
          <button className="mr-3 btn btn-success">Post</button>
          <button className="btn btn-error" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPost;
