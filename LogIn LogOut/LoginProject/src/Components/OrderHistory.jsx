import React from "react";
import "./OrderHistory.css";
const OrderHistory = () => {
  const getData = JSON.parse(localStorage.getItem("dashBoardData"));

  return (
    <>
      <div className="orderContainer">
        <h1 id="orId">Order History</h1>
        {getData.map((data, index) => (
          <div className="orderItem" key={index}>
            <span>{index + 1}</span>
            <span>{data.title}</span>
            <span>{data.ProductType}</span>
            <span>{data.Quantity}</span>
            <span>${data.Price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
