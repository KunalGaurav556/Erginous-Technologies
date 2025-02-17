import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {

    const navigate = useNavigate();
    const userDetail = {
        name : '',
        email : '',
        password : ''
    }

    const [data,setData] = useState(userDetail)
    const handleInput =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setData({...data,[name]:value});
        
    } 
    
    const handleSubmit = (e)=>{  
        e.preventDefault()
        const name = e.target.name;
        if(data.name === '' || data.email==='' || data.password===''){
            alert('fill the empty section');
        }
        else{
            const getData = JSON.parse(localStorage.getItem('user') || '[]');
            let arr = [];
            arr = [...getData];
            arr.push(data);
            localStorage.setItem('user', JSON.stringify(arr));
            console.log(arr);
            navigate('/Home')
        }  
    }
  
  return (
   <>
    <h3>SignUp Page</h3>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='name' onChange={handleInput}/>
        <input type="text" name='email' placeholder='Email' onChange={handleInput}/>
        <input type="text" name='password' placeholder='Password' onChange={handleInput}/>
        <button>Sign Up</button>
       
    </form>

    <button onClick={()=>{navigate('/SignUpPage')}}>All ready have an account</button>
   </>
  )
}

export default AuthForm