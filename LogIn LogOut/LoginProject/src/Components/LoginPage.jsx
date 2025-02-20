import React, { useRef, useState } from "react";
import './LoginPage.css'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup';
import { ToastContainer,toast } from "react-toastify";

const LoginPage = () => {

    const navigate = useNavigate();
    const [emailActive , setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const [userData,setUserData] = useState({
      email : '',
      password : ''
    });

    const handleLogInChange =(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setUserData({...userData,[name]:value});
    }

    const handleLogin = (e)=>{
      e.preventDefault();
      const getData = JSON.parse(localStorage.getItem('user') || '[]');
      
      const findData = getData.find((data)=>
        data.Email===userData.email && data.Password===userData.password
      )

      if(findData){
        navigate('/home')
        notifySuccess();
        emailLogIn.current.style.display='none'
      }
      else{
        notify();
        setEmailActive(true)
        setPasswordActive(true)
      }
      
    }

    const notify = ()=>toast.warn('fill all the section first',{
      style:{backgroundColor:'red',color:'white'}
    })
    const notifySuccess = () => toast.success('SuccessFully LogIn')

  return (
    <>
      <div className="mainContainer">
      <form className="form">
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
            <g data-name="Layer 3" id="Layer_3">
              <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V7.187a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zM16 22a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"></path>
            </g>
          </svg>
          <input placeholder="Enter your Email"  className="input" type="email" name="email" onChange={handleLogInChange}/>
        </div>
        {emailActive ? (<span id="emailLogIn">Fill the email section first</span>) : null}

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
            <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.546-48 48-48h288c26.453 0 48 21.523 48 48v224c0 26.476-21.546 48-48 48zM48 224c-8.812 0-16 7.167-16 16v224c0 8.832 7.188 16 16 16h288c8.812 0 16-7.167 16-16V240c0-8.832-7.188-16-16-16z"></path>
            <path d="M304 224c-8.832 0-16-7.167-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.167 16-16 16s-16-7.167-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.167 16-16 16z"></path>
          </svg>
          <input placeholder="Enter your Password" className="input" type="password" name="password" onChange={handleLogInChange}/>
        </div>
          {setPasswordActive ? (<span>Password Section is Empty</span>) : null}

        <div className="flex-row">
          <div>
            <input type="radio" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button className="button-submit" onClick={handleLogin}>Log In</button>
        <ToastContainer/>
        <p className="p">
          Don't have an account? <span className="span" onClick={()=>{navigate('SignUp')}}>Sign Up</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512">
              <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014l57.992 10.632 25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456 0 32.792 3.404 50.797 9.649 67.408z" fill="#FBBB00"></path>
              <path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h138.887l46.012-.001z" fill="#518EF8"></path>
              <path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l84.383 67.262z" fill="#28B446"></path>
              <path d="M419.404 58.936l-82.933 67.896c-23.335-14.586-50.919-23.012-80.471-23.012-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#F14336"></path>
            </svg>
            Google
          </button>
          <button className="btn apple">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 22.773 22.773">
              <g>
                <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z"></path>
              </g>
            </svg>
            Apple
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default LoginPage;
