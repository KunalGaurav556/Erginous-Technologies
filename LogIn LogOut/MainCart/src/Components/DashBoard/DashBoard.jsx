import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import AddCostomer from "../AddCostomer/AddCostomer";
import CartSummary from "../CartSummary/CartSummary";
import "../ExtraComponents/DeleteBtn/DeleteBtn.css";
import "../ExtraComponents/AddBtn/AddBtn.css";
import { toast, ToastContainer } from "react-toastify";
import { Flag } from "lucide-react";
import "../ExtraComponents/FormAdd/FormAdd.css";
const DashBoard = () => {
  const [data, setData] = useState({
    title: "",
    ProductType: "",
    Quantity: "",
    Price: "",
  });

  const [dummy, setDummy] = useState([]);
  const [isPopUp, setPopUp] = useState(false);
  const [isAddPop, setAddPop] = useState(false);
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
    toast.success("Success fully added",
      {
        autoClose:'1000',
        position:'bottom-right',
        onClick:'none',
        closeButton:true
      }
    );
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
      setPopUp(false)
    }, 2000);
    // SuccesfullyAdded();
  };

  const SuccessFullyDelete = () =>
   {
    toast.success("Delete Succesfully", {
      autoClose:'2000',
      style: { color: "red" },
    });
   }
  const handleRemove = (index) => {
    setAddPop(()=>true);
    // SuccessFullyDelete();
  };

  const handleDelete = (index) => {
    const updatedData = dummy.filter((_, idx) => idx !== index);
    setDummy(updatedData);
    localStorage.setItem("dashBoardData", JSON.stringify(updatedData));
    setAddPop(false);
 
  };

  const handlePlus = (index) => {
    const updatedData = dummy.map((item, idx) =>
      idx === index ? { ...item, Quantity: Number(item.Quantity) + 1 } : item
    );
    setDummy(updatedData);
    localStorage.setItem("dashBoardData", JSON.stringify(updatedData));
    // SuccesfullyAdded()
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
              placeholder="$Price"
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
                  tabindex="0"
                  class="plusButton"
                  onClick={() => handlePlus(index)}
                >
                  <svg
                    class="plusIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <g mask="url(#mask0_21_345)">
                      <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                    </g>
                  </svg>
                </div>
                {/* <button>Remove</button> */}
                <button
                  id="dltBtn"
                  class="delete-button"
                  onClick={() => handleRemove(index)}
                >
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
                {isAddPop ? (
                  <div class="custom-card">
                    <div class="custom-card-content">
                      <p class="custom-card-heading">Are You Sure Delete file?</p>
                      <p class="custom-card-description">
                        Lorem ipsum dolor sit amet, consectetur adi
                      </p>
                    </div>
                    <div class="custom-card-button-wrapper">
                      <button class="custom-card-button custom-secondary" onClick={()=>{setAddPop(false)}}>
                        Cancel
                      </button>
                      <button
                        class="custom-card-button custom-primary"
                        onClick={()=>handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                    {/* <button class="custom-exit-button"  onClick={()=>{setAddPop(false)}}>
                      <svg height="20px" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                      </svg>
                    </button> */}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="add-CartSummary">
          <AddCostomer />
          <CartSummary />
        </div>
      </div>

      {isPopUp ? (
        <div className="card" style={{ backgroundColor: "gray" }}>
          <button
            className="dismiss"
            type="button"
            onClick={() => setPopUp(false)}
          >
            ×
          </button>
          <div className="header">
            <div className="image">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L9.00004 18L3.99994 13"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="content">
              <span className="title">Item Added SuccessFully</span>
              <p className="message">
                Thank you for your purchase. you package will be delivered
                within 2 days of your purchase
              </p>
            </div>
            <div className="actions">
              <button className="history" type="button">
                History
              </button>
              <button className="track" type="button">
                Track my package
              </button>
            </div>
          </div>
        </div>
      ) : null}

<ToastContainer />
    </>
  );
};

export default DashBoard;
