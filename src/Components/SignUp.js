import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './sign.css'
//import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                    alert("account created successfully")
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };
  //
    return (
        <div className="login-form-container">
          <form className="form-container" onSubmit={handleSignup}>
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/e3/f9/6a/e3f96a66-f307-33fc-d09f-58952a5f46ed/source/512x512bb.jpg"
              className="website-logo"
              alt="website logo"
            />
            <div className="input-container">
                <label className="input-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  name='email'
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="username"
                />
            </div>
            <div className="input-container">
                <label className="input-label" htmlFor="username">
                  Email
                </label>
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  name='email'
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email"
                />
            </div>
            <div className="input-container">
            
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              name='password'
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="password"
            />
          
            </div>
            <button className="login-button" type="submit">
              Signup
            </button>
            <a href='/login'>Login</a>
          </form>
        </div>
      
    )
}
export default SignUp;