import React, { useState } from "react";


export const AddHouse = () => {

  const [formData, setFromData] = useState({})
  const [str, setStr] = useState()

  const handleChange = (e) => {

    let inputName = e.target.className
    console.log(e.target.value)

    if (e.target.type === "checkbox") {
      setFromData({
        ...formData,
        [inputName]: setStr(e.target.checked),
      });
    }
    else {
      setFromData({
        ...formData,
        [inputName]: setStr(e.target.value)
      })

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  const Post = async (formData) => {
    let res = fetch(`http://localhost:8080/houses`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        formData,
        id: formData.length + 1
      })
    })
    let data = await res.json();
  }




  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={str} required onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input value={str} type="text" className="ownerName" required onChange={handleChange} />
        <br />
        <label>address</label>
        <input value={str} type="text" className="address" required onChange={handleChange} />
        <br />
        <label>areaCode</label>
        <input value={str} type="text" className="areaCode" required onChange={handleChange} />
        <br />
        <label>rent</label>
        <input value={str} type="text" className="rent" required onChange={handleChange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={str} type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input checked={str} type="checkbox" className="married" onChange={handleChange} />
        <br />
        <label>image</label>
        <input value={str} type="text" className="image" required onChange={handleChange} />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
