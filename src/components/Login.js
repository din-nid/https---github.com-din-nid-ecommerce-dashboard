import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate("/")
        }
    },)
    const handleLogin=async()=>{
        console.log(email,password);
        let result=await fetch("http://localhost:5000/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json()
        console.warn(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
        }else{
            alert("please enter correct details")
        }
}
return(
    <>
    <h1>Login Portal</h1>
    <div className="login">
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
    </div>
             <button onClick={handleLogin} className="appButton1" type="button">Login</button>
    </>
)
}
export default Login    