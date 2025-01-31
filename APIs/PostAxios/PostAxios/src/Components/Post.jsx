import React, { useState } from 'react'
import axios from 'axios'

const Post = () => {

    const data = {
        ID:'',
        UserID : '',
        title : ''
    }

    const [inputData,setInputData] = useState(data);
    const HandleData = (e)=>{
        setInputData({...inputData,[e.target.name] : e.target.value});
    }

    const onSubmitBtn = (e) =>{
            e.preventDefault();
            console.log("dmhdgjh")
            axios.post("https://jsonplaceholder.typicode.com/posts" , inputData)
            .then((response)=>{
                console.log(response);
            })
    }   



  return (
    <>
        <h3>Posting Data to Server</h3>

        <div>
            <label htmlFor="">Id : </label>
            <input type="text" name='ID'  onChange={HandleData}/> <br /> <br />

            <label htmlFor="">User ID : </label>
            <input type="text" name='UserID' onChange={HandleData}/><br /><br />

            <label htmlFor="">Title : </label>
            <input type="text"  name='title' onChange={HandleData}/> <br /><br />

            <button onClick={onSubmitBtn}>Submit</button>
        </div>
    </>
  )
}

export default Post