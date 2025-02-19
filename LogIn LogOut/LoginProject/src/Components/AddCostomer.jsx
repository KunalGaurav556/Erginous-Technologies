import React, { use, useEffect, useState } from "react";
import "./AddCostomer.css";
import SideBar from "./SideBar";

const AddCostomer = () => {
   const [data,setData] = useState({
        name :'',
        number : '',
   })
   const [updateData ,setUpdateData] = useState([]);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
        
    }

    const addCostomer = ()=>{
       if(data.name=='' || data.number==''){
        alert('Fill the empty section')
       }
       else{
        const dummyData = [...updateData,data]
        setUpdateData(dummyData);
        localStorage.setItem('addCostomerData',JSON.stringify(dummyData));
    //   console.log(updateData);
        setData({
            name :'',
            number : '',
        })
        alert("Costomer Added SuccessFully")
       }
    }   

  return (
    <>  
      <div className="addContainer">
        <div className="addleftBox">
          <h4>Add Costomer</h4>
          <div className="costomerBox">
            <div className="inputBox">
              <label htmlFor="">Name</label>
              <input value={data.name} name="name" type="text" onChange={handleChange}/>
            </div>

            <div className="inputBox">
              <label htmlFor="">Mobile Number :</label>
              <input value={data.number} name="number" type="number" onChange={handleChange}/>
            </div>

            <div className="ExistingCostomer">
              <select name="Gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <button id="addCostomerBtn" onClick={addCostomer}>Save And Approve</button>          
        </div>
      </div>
    </>
  );
};

export default AddCostomer;
