import React, { useState } from "react";


//easienst way to create uniqe id => id: new Date().getTime().toString()
export const AddHouse = () => {

  const [formData, setFromData] = useState({})

  const handleChange = (e) => {

    let inputName = e.target.className

    if (e.target.type === "checkbox") {
      setFromData({
        ...formData,
        [inputName]: e.target.checked,
      });
    }
    else {
      setFromData({
        ...formData,
        [inputName]:e.target.value,
      })

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  const Post = async (formData) => {

    const newData = {...formData , id: new Date().getTime().toString()}

    let res = fetch(`http://localhost:8080/houses`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...newData
      })
    })
  }




  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.className} required onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input value={formData.className} type="text" className="ownerName" required onChange={handleChange} />
        <br />
        <label>address</label>
        <input value={formData.className} type="text" className="address" required onChange={handleChange} />
        <br />
        <label>areaCode</label>
        <input value={formData.className} type="text" className="areaCode" required onChange={handleChange} />
        <br />
        <label>rent</label>
        <input value={formData.className} type="text" className="rent" required onChange={handleChange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.className} type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input checked={formData.className} type="checkbox" className="married" onChange={handleChange} />
        <br />
        <label>image</label>
        <input value={formData.className} type="text" className="image" required onChange={handleChange} />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
