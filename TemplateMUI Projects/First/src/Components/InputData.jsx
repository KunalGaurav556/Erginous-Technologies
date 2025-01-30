import React, { useState } from 'react'
// import Button from '@mui/icons-material'
import { Button, useStepperContext } from '@mui/material';
import { createContext } from 'react';
import Form from './Form';
import DashboardLayoutBasic from './DashboardLayoutBasic';
import RecipeReviewCard from './Card';


export const data1 = createContext();

const InputData = () => {
    const [productName,setProductName] = useState("");
    const [productModel,setProductModel] = useState('');
    const [productRating,setProductingRating] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [allData,setAllData] = useState([]);

    const name = "Gaurav";


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

    <h1>Input Admin</h1>  
    <form action="">
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

   </>
  )
}

export default InputData