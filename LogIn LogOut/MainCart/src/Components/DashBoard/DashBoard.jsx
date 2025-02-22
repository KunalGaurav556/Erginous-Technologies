import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import AddCostomer from "../AddCostomer/AddCostomer";
import CartSummary from "../CartSummary/CartSummary";
import "../ExtraComponents/DeleteBtn/DeleteBtn.css";
import "../ExtraComponents/AddBtn/AddBtn.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../ExtraComponents/DeleteBtn/DeleteBtn.css'

const DashBoard = () => {
  const [data, setData] = useState({
    title: "",
    ProductType: "",
    Quantity: "",
    Price: "",
  });

  const [dummy, setDummy] = useState([]);
  const [isPopUp, setPopUp] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null); 

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dashBoardData"));
    if (storedData) {
      setDummy(storedData);
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const SuccesfullyAdded = () => {
    toast.success("Successfully added!", {
      autoClose: 1000,
      position: "bottom-right",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.ProductType || !data.Quantity || !data.Price) {
      alert("Fill all the sections");
      return;
    }

    const updatedDummy = [...dummy, data];
    setDummy(updatedDummy);
    localStorage.setItem("dashBoardData", JSON.stringify(updatedDummy));

    setData({
      title: "",
      ProductType: "",
      Quantity: "",
      Price: "",
    });

    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 2000);

    SuccesfullyAdded();
  };

  const handleRemove = (index) => {
    setDeleteIndex(index);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = dummy.filter((_, idx) => idx !== deleteIndex);
      setDummy(updatedData);
      localStorage.setItem("dashBoardData", JSON.stringify(updatedData));
      setDeleteIndex(null)
    }
  };

  const handlePlus = (index) => {
    const updatedData = dummy.map((item, idx) =>
      idx === index ? { ...item, Quantity: Number(item.Quantity) + 1 } : item
    );
    setDummy(updatedData);
    localStorage.setItem("dashBoardData", JSON.stringify(updatedData));
  };

  return (
    <>
      <div className="mainDashBoardContainer">
        <div className="dashContainer">
          <form onSubmit={handleSubmit} id="dashForm">
            <input
              type="text"
              value={data.title}
              name="title"
              placeholder="Title"
              onChange={handleInput}
              required
              id="dashInput"
            />
            <input
              type="text"
              value={data.ProductType}
              name="ProductType"
              placeholder="Product Type"
              onChange={handleInput}
              required
              id="dashInput"
            />
            <input
              type="number"
              value={data.Quantity}
              name="Quantity"
              placeholder="Quantity"
              onChange={handleInput}
              required
              id="dashInput"
            />
            <input
              type="number"
              value={data.Price}
              name="Price"
              placeholder="Price"
              onChange={handleInput}
              required
              id="dashInput"
            />
            <button type="submit">ADD</button>
          </form>
        </div>

        <div className="maivMap">
          <div className="overflowDiv">
            {dummy.map((user, index) => (
              <div className="userRow" key={index}>
                <span>{index + 1}.</span>
                <span>{user.title}</span>
                <span>{user.ProductType}</span>
                <span>{user.Quantity}</span>
                <span>{user.Price}</span>

                <div
                  tabIndex="0"
                  className="plusButton"
                  onClick={() => handlePlus(index)}
                >
                  <svg
                    className="plusIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                  </svg>
                </div>

                <button
                  id="dltBtn"
                  className="delete-button"
                  onClick={() => handleRemove(index)}
                >
                  <svg className="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="add-CartSummary">
          <AddCostomer />
          <CartSummary />
        </div>
      </div>

      {isPopUp && (
        <div className="card" style={{ backgroundColor: "green" }}>
          <button className="dismiss" type="button" onClick={() => setPopUp(false)}>
            ×
          </button>
          <div className="header">
            <div className="image">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 7L9.00004 18L3.99994 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div className="content">
              <span className="title">Item Added Successfully</span>
              <p className="message">Your package will be delivered within 2 days.</p>
            </div>
          </div>
        </div>
      )}

      {deleteIndex !== null && (
        <div className="custom-card" style={{
          width:'250px',
          position:'fixed',
          height:'190px',
          backgroundColor:'yellow',
          borderRadius:'15px',
          color:'white',
          fontSize:'19px',
          padding:'1rem',
          top:"29%",
          left:'42%',
          display:'flex',
          justifyContent:'center',
          // alignItems:'center',
          flexDirection:'column'
        }}>
          <div className="custom-card-content">
            <p className="custom-card-heading" style={{color:'green'}}>Are you sure you want to delete?</p>
          </div>
          <div className="custom-card-button-wrapper" style={{marginTop:'1rem',display:'flex', gap:'10px'}}>
            <button className="custom-secondary" onClick={() => setDeleteIndex(null)}
              style={{
                backgroundColor:'black',
                padding:'10px',
                fontSize:'14px',
                borderRadius:'15px',
                cursor:'pointer',
                width:'100px',
                color:'white'
              }}
              >Cancel</button>
            <button className="custom-primary" onClick={handleDelete}
             style={{
              backgroundColor:'blue',
              padding:'10px',
              fontSize:'14px',
              borderRadius:'15px',
              cursor:'pointer',
              width:'100px',
              color:'white'
            }}
            >Delete</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default DashBoard;
