import React from "react";
import "./CartSummary.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CartSummary = () => {

    const navigate = useNavigate();

    const getData = JSON.parse(localStorage.getItem('dashBoardData'));
    const handleClick =()=>{
        console.log(getData)
    }
    const infoToast = ()=>{toast.info("Work in Progress",{
      position:'bottom-right',
      autoClose:1000
    })}
    let totalPrice = 0
    let totalQuantity = 0;
    getData.map((data,index)=>{
        totalPrice = totalPrice+Number(data.Price)
        totalQuantity =totalQuantity+Number(data.Quantity);
    })
    // console.log(totalPrice)
  return (
    <>
      <div className="cartContainer">
        <h4>Cart Summary</h4>
        <div className="summary">
          <p>Total Quantity : {totalQuantity}</p>
          <p>Total Price : ${totalPrice}</p>
        </div>
        <div className="btnGroup">
          <button id="summarySave" onClick={()=>{navigate('/PaymentPage')}}>Pay</button>
          <button id="summaryApprove" onClick={()=>infoToast()}>Cash on Delivery</button>
        </div>

        <p>Payment Status : </p>
        <input type="radio" id="paid" name="paymentStatus" />
        <label htmlFor="paid" >Paid</label>

        <input type="radio" id="unpaid" name="paymentStatus" />
        <label htmlFor="unpaid">Unpaid</label>
      </div>
      <ToastContainer autoClose={1000}/>
    </>
  );
};

export default CartSummary;
