import React, { useEffect, useState } from "react";
import "./AddCostomer.css";
import "../ExtraComponents/AddCost/AddCost.css";
import "../PopUp/PopUp.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCostomer = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
  });
  const [updateData, setUpdateData] = useState([]);
  const [isPopUp, setPopUp] = useState(false);

  const SuccesfullyAdded = () => {
    toast.success("Customer Added Successfully");
  };

  const Warning = () => {
    toast.error("Fill all the Sections First", {
      style: { color: "red" },
      position: "bottom-left",
      autoClose:1000
    });
  };

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("addCostomerData");
    if (storedData) {
      setUpdateData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const addCostomer = () => {
    if (data.name === "" || data.number === "") {
      Warning();
      return;
    }

    setUpdateData((prevData) => {
      const newData = [...prevData, data];
      localStorage.setItem("addCostomerData", JSON.stringify(newData));
      return newData;
    });

    setData({
      name: "",
      number: "",
    });

    SuccesfullyAdded();
    setPopUp(true);

    setTimeout(() => {
      setPopUp(false);
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div className="addContainer">
        <div className="addleftBox">
          <h4>Add Customer</h4>
          <div className="costomerBox">
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input
                value={data.name}
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name.."
                required
              />
            </div>

            <div className="inputBox">
              <label htmlFor="number">Mobile Number:</label>
              <input
                value={data.number}
                name="number"
                type="number"
                placeholder="Number.."
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            className="btn"
            style={{ backgroundColor: "gray", color: "white", fontWeight: "600",marginTop:'2rem' }}
            onClick={addCostomer}
           >
            Add Customer
          </button>
        </div>
      </div>

      {isPopUp && (
        <div className="card">
          <button className="dismiss" type="button" onClick={() => setPopUp(false)}>
            ×
          </button>
          <div className="header">
            <div className="image">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 7L9.00004 18L3.99994 13"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="content">
              <span className="title">Customer Added Successfully</span>
              <p className="message">
                Thank you! Your package will be delivered within 2 days.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCostomer;
