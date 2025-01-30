import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Post.Modular.css";

const Post = () => {
  const [post, setPost] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPost(response.data);
    // console.log(post)
    console.log(response.data);
    // console.log("dskfjhskd")
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h2 className="heading">Displaying Post Data of JSON Placeholder</h2>
      <div className="mainContainer">
        

        {post.map((data, index) => {
          return (
                <div key={index} className="mainCard">
                    <span><b style={{color:"red"}}>ID :</b> {data.id}</span><br /><br />
                    <span> <b style={{color:'green'}}>User ID : </b>{data.userId}</span> <br /><br />
                    <span><b style={{color:'red'}}> Title : </b>{data.title}</span> <br /><br />
                    <span><b style={{color:'red'}}>Body :</b> {data.body}</span>
                </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
