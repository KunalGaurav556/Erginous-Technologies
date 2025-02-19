import React, { useEffect, useState, useTransition } from "react";
import "./DashBoard.css";
import AddCostomer from "./AddCostomer";
import CartSummary from "./CartSummary";

const DashBoard = () => {
  const [data, setData] = useState({
    title: "",
    ProductType: "",
    Quantity: "",
    Price: "",
  });

  const [dummy, setDummy] = useState([]);

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dashBoardData'));
    if (storedData) {
      setDummy(storedData);
    }
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    if (
      data.title === "" ||
      data.ProductType === "" ||
      data.Quantity === "" ||
      data.Price === ""
    ) {
      alert("fill all the section");
    } else {

      const updatedDummy = [...dummy, data];
      setDummy(updatedDummy); 
      localStorage.setItem('dashBoardData', JSON.stringify(updatedDummy));

      setData({
        title: "",
        ProductType: "",
        Quantity: "",
        Price: "",
      });
    }
  };

  const handleRemove = (index) => {
    const updatedData = dummy.filter((_, idx) => idx !== index);
    setDummy(updatedData);
    localStorage.setItem('dashBoardData', JSON.stringify(updatedData)); 
  };

  const handlePlus = (index) => {
    const updateData = [...dummy];
    updateData[index].Quantity++;
    setDummy(updateData);
    localStorage.setItem('dashBoardData', JSON.stringify(updateData)); 
  };

  return (
    <>
      <div className="dashContainer">
        <input
          type="text"
          value={data.title}
          name="title"
          placeholder="Title"
          onChange={handleInput}
        />
        <input
          type="text"
          value={data.ProductType}
          name="ProductType"
          placeholder="Product Type"
          onChange={handleInput}
        />
        <input
          type="number"
          value={data.Quantity}
          name="Quantity"
          placeholder="Quantity"
          onChange={handleInput}
        />
        <input
          type="number"
          value={data.Price}
          name="Price"
          placeholder="$Price"
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>ADD</button>
      </div>

      <div className="maivMap">
      <div className="overflowDiv">
          {dummy.map((user, index) => {
            return (
              <div className="userRow" key={index}>
                <span>{index + 1}.</span>
                <span>{user.title}</span>
                <span>{user.ProductType}</span>
                <span>{user.Quantity}</span>
                <span>{user.Price}</span>
                <button onClick={() => handlePlus(index)}>+</button>
                <button onClick={() => handleRemove(index)}>Remove</button>
             
              </div>
            );
          })}
           </div>
        </div>
  


      <div className="CostomerSection">
          <AddCostomer/>
          <CartSummary/>
      </div>

        
    </>
  );
};

export default DashBoard;
