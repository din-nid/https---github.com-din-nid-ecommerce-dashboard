import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const[name,setName]=React.useState('')
    const[price,setPrice]=React.useState('')
    const[category,setCategory]=React.useState('')
    const[company,setCompany]=React.useState('')
    const [error,setError]=React.useState(false)
    const navigate=useNavigate()

const addProduct=async()=>{
    console.log(name,price,category,company)
    if(!name || !price || !category || !company){
        setError(true)
        return false    
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    let result=await fetch("http://localhost:5000/add-product",{
        method:"POST",
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json();
    console.warn(result)
    navigate("/")
}
return(
    <div className="product">
        <h1>Add Product</h1>
        <input className="inputBox" type="text" value={name}
         onChange={(e) => {setName(e.target.value)}} placeholder="Enter Product Name" />
         {error && !name && <span className="invalid-input">Enter Valid Name</span>}

        <input className="inputBox" type="text" value={price}
         onChange={(e) => {setPrice(e.target.value)}} placeholder="Enter Product Price" />
         {error && !price && <span className="invalid-input">Enter Valid Price</span>}

        <input className="inputBox" type="text" value={category} 
        onChange={(e) => {setCategory(e.target.value)}} placeholder="Enter Product category" />
        {error && !category && <span className="invalid-input">Enter Valid category</span>}

        <input className="inputBox" type="text" value={company} 
        onChange={(e) => {setCompany(e.target.value)}} placeholder="Enter Product Company" />
        {error && !company && <span className="invalid-input">Enter Valid Category</span>}

        <button onClick={addProduct} className="'appButton">Add Product</button>
    </div>
)
}
export default AddProduct