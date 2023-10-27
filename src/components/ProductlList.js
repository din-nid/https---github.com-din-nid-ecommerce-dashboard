import React ,{useEffect, useState}from "react"
import { Link } from "react-router-dom"

const ProductList=()=>{
    const [products,setProducts]=useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts=async()=>{
        let result=await fetch('http://localhost:5000/products')
        result=await result.json()
        setProducts(result)    
    }
    console.log("products",products)

    const deleteProduct=async(id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"DELETE"
        })
        result=await result.json()
        if(result){
            getProducts()
        }
    }
    return(
        <div className="product-list">
            <h3>Product List</h3>
            <ul >
                <li style={{backgroundColor:"pink"}}>S.No.</li>
                <li style={{backgroundColor:"pink"}}>Name</li>
                <li style={{backgroundColor:"pink"}}>Price</li>
                <li style={{backgroundColor:"pink"}}>Category</li>
                <li style={{backgroundColor:"pink"}}>Company</li>
                <li style={{backgroundColor:"pink"}}>Operations</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to ={"/update/"+item._id}>Update</Link>
                    </li>
                </ul>
                )
            }
        </div>
    )
}
export default ProductList;
