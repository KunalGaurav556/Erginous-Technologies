import React, { useState } from 'react'
// import Button from '@mui/icons-material'
import { Button, Card, useStepperContext } from '@mui/material';
import { createContext } from 'react';
import Form from './Form';
import DashboardLayoutBasic from './DashboardLayoutBasic';
import RecipeReviewCard from './Card';
import Context from '../ContextAPi/Context';


export const data1 = createContext();

const InputData = () => {
    const [productName,setProductName] = useState("Dummy");
    const [productModel,setProductModel] = useState('Dummy');
    const [productRating,setProductingRating] = useState('Dummy');
    const [productPrice,setProductPrice] = useState('Dummy');
    const [allData,setAllData] = useState([]);

    const name = "Gaurav";

    const dataDummy = allData;


    const HandleProductName =(e)=>{
        setProductName(e.target.value);
        // console.log(productName);
    }
    const HandleProductModel =(e)=>{
        // console.log(e.target.value);
        setProductModel(e.target.value)
    }
    const handleProductRating = (e)=>{
        // console.log(e.target.value);
        setProductingRating(e.target.value);
    }
    const handleProductPrice = (e)=>{
        // console.log(e.target.value)
        setProductPrice(e.target.value);
    }


    const submit = ()=>{
        const obj ={
            productName : productName,
            productModel : productModel,
            productRating : productRating,
            productPrice : productPrice   
        }
       
        if(productName===''){
            alert("Enter Product name ")
        }
        else if (productModel===''){
            alert("Enter your Product Model")
        }
        else if(productRating===''){
            alert('Enter Product Rating')
        }
        else if(productPrice===''){
            alert('Enter Product price');
        }
        else{
            setAllData([...allData,obj]);
            // console.log(allData);
        }
    }
    // const contextData = allData;
  return (
   <>
   {/* <Context value={dataDummy}/> */}
  
    <div className="conatiner" style={{
        // border:'2px solid red',
        display:'flex',
        justifyContent:'space-around',
        // backgroundColor:'blue',
        flexDirection:'column'

    }}>
    <h1>Input Admin</h1>  
    <div className="leftContainer">  <form action="">
        <label htmlFor="">Product Name : </label>
        <input type="text" onChange={HandleProductName} /><br /> <br />

        <label htmlFor="">Product Model : </label>
        <input type="text"  onChange={HandleProductModel}/> <br /> <br />

        <label htmlFor="">Product Rating : </label>
        <input type="text" onChange={handleProductRating} /> <br /><br />

        <label htmlFor="">Product Price : </label>
        <input type="text" onChange={handleProductPrice}/> <br /> <br />

        <Button variant='contained' size='small' onClick={submit}>submit</Button>
    </form>
    </div>
   <div className="rightContainer" style={{
        // border:'2px solid yellow',
        // backgroundColor:'',
        display:'flex',
        flexWrap:'wrap',
        gap:'2rem',
        marginTop:'2rem'
   }}>
     <RecipeReviewCard data={dataDummy}/>
   </div>

    </div>
   </>
  )
}

export default InputData