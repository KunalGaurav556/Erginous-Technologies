import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios"

const Comments = () => {
  const [cmts, setcmts] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setcmts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <div style={{margin:'0',padding:'0'}}> <Navbar /></div>
      <div className="mainCmnt">
        <div className="upCm">
        <h2 style={{textAlign:'center',color:'blue'}}>Displaying Data of Comments Section of JSON Placeholder</h2>
        </div>
        <div className="downCM">
          {cmts.map((data, index) => {
            return (
              <div className="mainCm">
                {console.log(data.id)}
                <div className="cmntcard">
                  <span><b style={{color:'red'}}>ID : </b>{data.id}</span>
                  <br />
                  <span><b style={{color:'green'}}>Post ID : </b>{data.postId}</span><br />
                  <span><b style={{color:'red'}}>Name :</b> {data.name}</span>
                  <br />
                  <span><b style={{color:'red'}}>Body :</b> {data.body}</span> <br />
                </div>

                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comments;
