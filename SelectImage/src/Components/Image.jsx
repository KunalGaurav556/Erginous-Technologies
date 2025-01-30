import React, { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="file" accept="image/*" onChange={handleImageChange} placeholder="lkdhkdhgd" />
      
      {image && (
        <div>
          <h3>Selected Image:</h3>
          <img src={image} alt="Selected" style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
}
