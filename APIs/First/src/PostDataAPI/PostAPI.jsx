import axios from 'axios';
import React, { useState } from 'react';
import './PostAPI.css';

const PostAPI = () => {
  const data = {
    userId: '',
    id: '',
    title: '',
    body: ''
  };

  const [allData, setAllData] = useState(data);

  const handleData = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };

  const handleSubmitBtn = (e) => {
    if (!allData.userId || !allData.id || !allData.title || !allData.body) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    else{
      axios.post("https://jsonplaceholder.typicode.com/posts", allData)
      .then((response) => {
        console.log(response);
        alert("Data submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
    }

   
  };

  return (
    <div className="post-container">
      <div className="post-card">
        <h3 className="post-title">Create a New Post</h3>

        <label className="post-label">ID:</label>
        <input type="number" name="id" className="post-input" onChange={handleData} />

        <label className="post-label">User ID:</label>
        <input type="number" name="userId" className="post-input" onChange={handleData} />

        <label className="post-label">Title:</label>
        <input type="text" name="title" className="post-input" onChange={handleData} />

        <label className="post-label">Body:</label>
        <textarea name="body" className="post-textarea" onChange={handleData}></textarea>

        <button className="post-button" onClick={handleSubmitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default PostAPI;
