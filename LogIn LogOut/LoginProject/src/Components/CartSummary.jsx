import React from "react";
import "./CartSummary.css";

const CartSummary = () => {
    const getData = JSON.parse(localStorage.getItem('dashBoardData'));
    const handleClick =()=>{
        console.log(getData)
    }
    let totalPrice = 0
    let totalQuantity = 0;
    getData.map((data,index)=>{
        totalPrice = totalPrice+Number(data.Price)
        totalQuantity =totalQuantity+Number(data.Quantity);
    })
    console.log(totalPrice)
  return (
    <>
      <div className="cartContainer">
        <h4>Cart Summary</h4>
        <div className="summary">
          <p>Total Quantity : {totalQuantity}</p>
          <p>Total Price : ${totalPrice}</p>
        </div>
        <div className="btnGroup">
          <button onClick={handleClick} id="summarySave">Save</button>
          <button id="summaryApprove">Save And Approve</button>
        </div>

        <p>Payment Status : </p>
        <input type="radio" id="paid" name="paymentStatus" />
        <label htmlFor="paid">Paid</label>

        <input type="radio" id="unpaid" name="paymentStatus" />
        <label htmlFor="unpaid">Unpaid</label>
      </div>
    </>
  );
};

export default CartSummary;
