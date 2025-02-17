import React, { useEffect, useState, useTransition } from "react";

const DashBoard = () => {
  const [data, setData] = useState({
    title: "",
    ProductType: "",
    Quantity: "",
    Price: "",
  });

  const [dummy, setDummy] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if(data.title==='' || data.ProductType==='' || data.Quantity==='' || data.Price===''){
        alert('fill all the section');
    }
    else{
        setDummy([...dummy, data]);
        setData({
          title: "",
          ProductType: "",
          Quantity: "",
          Price: "",
        });
    }  
  };
  useEffect(() => {
    // console.log(dummy)
  }, [dummy]);

  const handleRemove = (index)=>{
    const updatedData = dummy.filter((_,idx)=> idx !==index);
    setDummy(updatedData);
  }


  const handlePlus = (index)=>{
    const updateData = [...dummy];
    updateData[index].Quantity++
    setDummy(updateData);
  }

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
          placeholder="Price"
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>+</button>
      </div>
    
      {dummy.map((user, index) => {
        return (
            <div style={{
                display:'flex',
                width:'95%',
                border:'2px solid red',
                gap:'1rem',
                padding:'1rem',
                justifyContent:'center',
                alignItems:'center',
                justifyContent:'space-around'
            }} key={index}>
              {/* <input type="text" value={index}/> */}
                <input type="text" value={user.title} />
                <input type="text" value={user.ProductType} />
                <input type="text" value={user.Quantity}/>
                <input type="text" value={user.Price} />
                <button onClick={()=>{handlePlus(index)}}>+</button>
                <button onClick={()=>{handleRemove(index)}}>Remove</button>
            </div>    
        )
      })}


    </>
  );
};

export default DashBoard;
